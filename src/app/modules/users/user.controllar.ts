import { NextFunction, Request, Response } from 'express'
import userService from './user.service'

const creteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      massage: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  creteUser,
}
