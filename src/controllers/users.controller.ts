import { Router } from "express";
import { UserService } from "../services/user.service";

export const router = Router()

router.get("/", async (_, res) => {
  const users = await UserService.getAll();
  res.json(users)
})
