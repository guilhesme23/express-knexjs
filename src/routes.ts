import { Router } from 'express';
import { router as UsersController } from './controllers/users.controller';

type Route = {
  path: string,
  controller: Router
}

export const routes: Route[] = [
  {
    path: "/users",
    controller: UsersController
  }
]

