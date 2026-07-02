import pg from "pg";

let pool;

export function connect(config) {
  pool = new pg.Pool(config);
}

export async function query(sql) {
  const result = await pool.query(sql);
  return result.rows;
}

export async function close() {
  if (pool) {
    await pool.end();
  }
}