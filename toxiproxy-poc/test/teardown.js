import fs from "fs";
import Docker from "dockerode";

export default async function () {

    const docker = new Docker();

    const state =
        JSON.parse(
            fs.readFileSync(".test-state.json")
        );

    await docker
        .getContainer(state.postgresId)
        .stop();

    await docker
        .getContainer(state.postgresId)
        .remove();

    await docker
        .getContainer(state.toxiproxyId)
        .stop();

    await docker
        .getContainer(state.toxiproxyId)
        .remove();

    fs.unlinkSync(".test-state.json");
}