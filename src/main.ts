import Knex from 'knex';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './db.slite',
  }
})

knex.schema.createTable('users', t => {
  t.increments()
  t.string('name')
  t.timestamps()
})


