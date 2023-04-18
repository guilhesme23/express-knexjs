import { Knex } from "knex";
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt'

const table_name = 'users'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('accounts').del();
    await knex(table_name).del();

    const usersMock = Array.from({length: 40}, () => {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("123456", 12),
        name: faker.name.fullName()
      }
    })
    // Inserts seed entries
    await knex(table_name).insert(usersMock);


    await knex('accounts').insert(Array.from({length: 50}, () => {
      return {
        id: faker.datatype.uuid(),
        balance: faker.finance.amount(0, 10000.0),
        credit: faker.finance.amount(0, 500),
        userId: usersMock[Math.floor(Math.random()*usersMock.length)].id
      }
    }));
};
