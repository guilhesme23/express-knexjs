# Express + KnexJS

Project boilerplate using Express with KnexJS.

## How to Run

- Set up knexjs:

`yarn run knex init -x ts`

- You can create migration files with:

`yarn migrate:create <migration name>`

- Run migrations:

`yarn migrate`

- Optionally seed the database

`yarn run knex seed:run`
