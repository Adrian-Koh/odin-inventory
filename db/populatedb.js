const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS teams (
  teamid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  teamname VARCHAR ( 255 )
);

INSERT INTO teams (teamname) 
VALUES
  ('Brazil'),
  ('South Korea'),
  ('Germany');

CREATE TABLE IF NOT EXISTS players (
  playerid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  teamid INTEGER,
  position VARCHAR ( 20 ),
  FOREIGN KEY (teamid) REFERENCES teams(teamid)
);

INSERT INTO players (name, teamid, position) 
VALUES
  ('Neymar Jr.', 1, 'Forward'),
  ('Son Heung Min', 2, 'Forward'),
  ('Manuel Neuer', 3, 'Goalkeeper');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
