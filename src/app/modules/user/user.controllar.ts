import { RequestHandler } from 'express'
import { UserService } from './user.service'
// import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // req-validation

    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      massage: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserControllar = {
  createUser,
}
