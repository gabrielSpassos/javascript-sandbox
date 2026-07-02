import fs from "fs";
import { PostgreSqlContainer, GenericContainer } from "testcontainers";
import { Toxiproxy } from "toxiproxy-node-client";

export default async function () {

    const postgres =
        await new PostgreSqlContainer("postgres:18-alpine")
            .start();

    const toxiproxyContainer =
        await new GenericContainer("ghcr.io/shopify/toxiproxy:2.12.0")
            .withExposedPorts(8474, 8666)
            .start();

    const client = new Toxiproxy({
        host: toxiproxyContainer.getHost(),
        port: toxiproxyContainer.getMappedPort(8474)
    });

    await client.populate([
        {
            name: "postgres",
            listen: "0.0.0.0:8666",
            upstream: `${postgres.getHost()}:${postgres.getMappedPort(5432)}`
        }
    ]);

    fs.writeFileSync(
        ".test-state.json",
        JSON.stringify({
            postgresId: postgres.getId(),
            toxiproxyId: toxiproxyContainer.getId(),
            toxiproxyHost: toxiproxyContainer.getHost(),
            toxiproxyPort: toxiproxyContainer.getMappedPort(8474)
        })
    );

    process.env.DB_HOST = toxiproxyContainer.getHost();
    process.env.DB_PORT = 8666;
    process.env.DB_NAME = postgres.getDatabase();
    process.env.DB_USER = postgres.getUsername();
    process.env.DB_PASSWORD = postgres.getPassword();
}