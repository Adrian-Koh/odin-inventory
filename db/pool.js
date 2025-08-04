const { Pool } = require("pg");

const pool = new Pool({
  connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@trolley.proxy.rlwy.net:32194/railway`,
});

module.exports = pool;
