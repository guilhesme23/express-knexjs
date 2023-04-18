import { User } from '../models/user.model';
import { db } from '../db/config';
import { Service } from '../interfaces/service.interface';

export const UserService: Service<User> = {
  getAll
}

async function getAll(): Promise<User[]> {
  const users = await db.select('id', 'name', 'email', 'username')
    .from<User>('users')

  return users
}
