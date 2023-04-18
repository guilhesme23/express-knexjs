import { UUID } from "crypto"
import Joi from "joi"

export type User = {
  id: UUID,
  name: string,
  email: string,
  username: string,
}

export const CreateUserSchema = Joi.object({
  name: Joi.string().required().min(1).max(500),
  email: Joi.string().required().email(),
  password: Joi.string().required().alphanum().min(8),
  confirmPassword: Joi.string().required(),
  username: Joi.string().min(2).max(30).required()
}).assert('.password', Joi.ref('confirmPassword'), 'Password should match Confirmation Password')
