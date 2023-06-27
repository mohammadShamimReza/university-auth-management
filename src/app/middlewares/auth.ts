import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get authorization credentials
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      // verify token

      let varifiedUser = null;

      varifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = varifiedUser; // role, userId

      // role based authentication
      if (requiredRoles.length && !requiredRoles.includes(varifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'You are forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
