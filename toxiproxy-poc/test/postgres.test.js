import test from "node:test";
import assert from "node:assert/strict";

import { Network } from "testcontainers";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { ToxiProxyContainer } from "@testcontainers/toxiproxy";

import { connect, close } from "../src/db.js";
import { currentTime } from "../src/app.js";

let network;
let postgres;
let toxiproxy;
let proxy;

test.before(async () => {
  network = await new Network().start();

  postgres = await new PostgreSqlContainer("postgres:18-alpine")
    .withNetwork(network)
    .withNetworkAliases("postgres")
    .start();

  toxiproxy = await new ToxiProxyContainer("ghcr.io/shopify/toxiproxy:2.12.0")
    .withNetwork(network)
    .start();

  proxy = await toxiproxy.createProxy({
    name: "postgres",
    upstream: "postgres:5432"
  });

  connect({
    host: proxy.host,
    port: proxy.port,
    database: postgres.getDatabase(),
    user: postgres.getUsername(),
    password: postgres.getPassword()
  });
});

test.after(async () => {
  await close();
  await toxiproxy.stop();
  await postgres.stop();
  await network.stop();
});

test.afterEach(async () => {
  try {
    const res = await proxy.instance.api.get(`${proxy.instance.getPath()}/toxics`);
    const toxics = res.data || [];

    for (const t of toxics) {
      try {
        const toxic = await proxy.instance.getToxic(t.name);
        await toxic.remove();
      } catch (e) {
        // ignore individual toxic removal errors
      }
    }
  } catch (e) {
    // ignore errors when listing toxics
  }

  await proxy.setEnabled(true);
});

test("should query postgres", async () => {
  const result = await currentTime();

  assert.ok(result.now);
});

test("should add latency", async () => {

  await proxy.instance.addToxic({
    name: "latency",
    type: "latency",
    stream: "upstream",
    toxicity: 1,
    attributes: {
      latency: 2000,
      jitter: 0
    }
  });

  // wait briefly for the toxic to be applied
  await new Promise((r) => setTimeout(r, 100));

  const start = Date.now();

  await currentTime();

  const elapsed = Date.now() - start;

  assert.ok(elapsed >= 1900);
});

test("should disable proxy", async () => {

  await proxy.setEnabled(false);

  await assert.rejects(async () => {
    await currentTime();
  });

});

test("should recover after enabling proxy", async () => {

  await proxy.setEnabled(false);

  await assert.rejects(async () => {
    await currentTime();
  });

  await proxy.setEnabled(true);

  // allow time for the proxy to fully enable
  await new Promise((r) => setTimeout(r, 100));

  const result = await currentTime();

  assert.ok(result.now);
});