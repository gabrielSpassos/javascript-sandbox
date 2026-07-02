import { query } from "./db.js";

export async function currentTime() {
    const rows = await query("SELECT NOW() AS now");
    return rows[0];
}