import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
// import  Jwt  from "jsonwebtoken";

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  // Matching password
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password id incorrect');
  }

  // create access token
  // const accessToken = Jwt.sign({
  //   id: isUserExist.id,
  //   roll: isUserExist.roll
  // })

  // return {
  //   isUserExist?.needsPasswordChange,
  //   accessToken
  // };
};

export const AuthService = {
  loginUser,
};
