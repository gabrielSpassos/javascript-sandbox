import pool from "./db.js";

export async function getCurrentTime() {
    const result = await pool.query("SELECT NOW()");
    return result.rows[0];
}