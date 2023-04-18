import { Router } from "express";
import { UserService } from "../services/user.service";
import { CreateUserSchema } from "../models/user.model";

export const router = Router()

router.get("/", async (_, res) => {
  const users = await UserService.getAll();
  res.json(users)
})

router.post('/', async (req, res) => {
  let userData = req.body
  const {error, value} = CreateUserSchema.validate(userData)

  if (error) {
    return res.status(400).json(error)
  }

  try {
    delete value.confirmPassword
    const result = await UserService.create(value)
    return res.status(201).json(result)
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      error: err
    })
  }
})
