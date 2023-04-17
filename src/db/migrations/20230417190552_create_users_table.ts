import { Knex } from "knex";

const table_name = 'users'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(table_name, function (t) {
    t.uuid('id')
    t.string('email')
    t.string('name')
    t.string('password')
    t.string('username')
    t.primary(['id'])
    t.unique(['email'], {indexName: 'users_email'})
    t.unique(['username'], {indexName: 'users_username'})
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(table_name)
}

