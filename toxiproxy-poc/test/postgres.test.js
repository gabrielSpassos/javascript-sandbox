import fs from "fs";
import { Toxiproxy } from "toxiproxy-node-client";
import { getCurrentTime } from "../src/app.js";

let proxy;

beforeAll(async () => {

    const state =
        JSON.parse(
            fs.readFileSync(".test-state.json")
        );

    const client = new Toxiproxy({
        host: state.toxiproxyHost,
        port: state.toxiproxyPort
    });

    proxy = await client.getProxy("postgres");
});

afterEach(async () => {
    await proxy.removeAllToxics();
});

test("database works normally", async () => {

    const result = await getCurrentTime();

    expect(result.now).toBeDefined();
});

test("latency chaos", async () => {

    await proxy.addToxic({
        name: "slow",
        type: "latency",
        stream: "downstream",
        attributes: {
            latency: 3000,
            jitter: 500
        }
    });

    const start = Date.now();

    await getCurrentTime();

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThan(2500);
});

test("timeout chaos", async () => {

    await proxy.addToxic({
        name: "timeout",
        type: "timeout",
        stream: "downstream",
        attributes: {
            timeout: 0
        }
    });

    await expect(getCurrentTime())
        .rejects
        .toThrow();
});

test("recovery after chaos", async () => {

    await proxy.addToxic({
        name: "slow",
        type: "latency",
        stream: "downstream",
        attributes: {
            latency: 5000
        }
    });

    await proxy.removeAllToxics();

    const result = await getCurrentTime();

    expect(result.now).toBeDefined();
});