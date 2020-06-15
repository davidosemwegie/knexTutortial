require("dotenv").config()

var knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
  },
})

knex
  .select("breakdown_id", "ticket_id")
  .from("breakdowns_material")
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
