import { Knex } from "knex";

const table_name = 'accounts'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(table_name, function (t) {
    t.uuid('id')
    t.primary(['id'])
    t.double('balance', 10, 2).defaultTo(0.0)
    t.double('credit', 10, 2).defaultTo(500.0)
    t.uuid('userId')
    t.foreign('userId').references('users.id')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(table_name)
}

