import api from "./api";

export const registerUser = async (
  userData
) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};

export const loginUser = async (
  credentials
) => {
  const response = await api.post(
    "/auth/login",
    credentials
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await api.get(
    "/auth/profile"
  );

  return response.data;
};

export const forgotPassword = async (
  email
) => {
  const response = await api.post(
    "/auth/forgot-password",
    { email }
  );

  return response.data;
};

export const resetPassword = async (
  data
) => {
  const response = await api.post(
    "/auth/reset-password",
    data
  );

  return response.data;
};