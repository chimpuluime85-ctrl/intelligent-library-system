import {
  registerUserService,
  loginUserService,
  getUserProfileService,
} from "../services/authService.js";

export const registerUser = async (
  req,
  res
) => {
  try {
    const { name, email, password, role } =
      req.body;

    const result =
      await registerUserService(
        name,
        email,
        password,
        role
      );

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (
  req,
  res
) => {
  try {
    const { email, password } = req.body;

    const result = await loginUserService(
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProfile = async (
  req,
  res
) => {
  try {
    const user =
      await getUserProfileService(
        req.user.id
      );

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPassword = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    res.status(200).json({
      success: true,
      message:
        "Password reset feature placeholder",
      email,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (
  req,
  res
) => {
  try {
    res.status(200).json({
      success: true,
      message:
        "Password reset successful placeholder",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};