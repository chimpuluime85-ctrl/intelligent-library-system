import User from "../models/User.js";
import { generateToken } from "../config/jwt.js";

export const registerUserService = async (
  name,
  email,
  password,
  role = "student"
) => {
  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const loginUserService = async (
  email,
  password
) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch =
    await user.matchPassword(password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const getUserProfileService =
  async (userId) => {
    const user = await User.findByPk(
      userId,
      {
        attributes: {
          exclude: ["password"],
        },
      }
    );

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };