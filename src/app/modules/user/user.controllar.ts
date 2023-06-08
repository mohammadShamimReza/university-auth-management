import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    next();
    res.status(200).json({
      success: true,
      massage: 'User created successfully',
      data: result,
    });
  }
);

export const UserControllar = {
  createUser,
};
