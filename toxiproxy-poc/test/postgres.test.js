import test from "node:test";
import assert from "node:assert";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { ToxiProxyContainer } from "@testcontainers/toxiproxy";

import { connect, close } from "../src/db.js";
import { currentTime } from "../src/app.js";

let postgres;
let toxiproxy;
let proxy;

beforeAll(async () => {
    postgres = await new PostgreSqlContainer("postgres:17")
        .start();

    toxiproxy = await new ToxiProxyContainer()
        .start();

    proxy = await toxiproxy.createProxy(
        postgres,
        5432
    );

    connect({
        host: proxy.host,
        port: proxy.port,
        database: postgres.getDatabase(),
        user: postgres.getUsername(),
        password: postgres.getPassword()
    });
});

afterAll(async () => {
    await close();
    await toxiproxy.stop();
    await postgres.stop();
});

afterEach(async () => {
    await proxy.removeAllToxics();
});

test("should query postgres", async () => {
    const result = await currentTime();

    expect(result.now).toBeDefined();
});

test("should inject latency", async () => {
    await proxy.addLatency({
        toxicity: 1,
        latency: 3000,
        jitter: 500
    });

    const start = Date.now();

    await currentTime();

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThan(2500);
});

test("should recover after latency removal", async () => {
    await proxy.addLatency({
        latency: 4000
    });

    await proxy.removeAllToxics();

    const start = Date.now();

    await currentTime();

    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(1000);
});

test("should timeout", async () => {
    await proxy.addTimeout({
        timeout: 0
    });

    await expect(currentTime()).rejects.toThrow();
});