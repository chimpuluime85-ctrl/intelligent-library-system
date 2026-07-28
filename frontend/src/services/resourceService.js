import api from "./api";

export const getResources = async () => {
  const response = await api.get(
    "/resources"
  );

  return response.data;
};

export const createResource = async (
  data
) => {
  const response = await api.post(
    "/resources",
    data
  );

  return response.data;
};