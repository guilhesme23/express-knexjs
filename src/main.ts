import Knex from 'knex';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './db.slite',
  }
})



