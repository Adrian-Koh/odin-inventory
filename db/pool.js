const { Pool } = require("pg");

const pool = new Pool({
  connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:5432/top_users`,
});

module.exports = pool;
