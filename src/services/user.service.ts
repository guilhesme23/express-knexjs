import { User } from '../models/user.model';
import { db } from '../db/config';
import { Service } from '../interfaces/service.interface';
import crypto from 'crypto';

export const UserService: Service<User> = {
  getAll,
  create
}

async function create(data: Partial<User>): Promise<User> {
  const user = await db.insert({
    id: crypto.randomUUID(),
    ...data
  }, ['id', 'name', 'username', 'email']).into<User>('users')

  if (!user) {
    throw Error('Could not insert value in database')
  }

  return user[0]
}

async function getAll(): Promise<User[]> {
  const users = await db.select('id', 'name', 'email', 'username')
    .from<User>('users')

  return users
}
