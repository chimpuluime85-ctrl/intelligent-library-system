import api from "./api";

export const getSpaces = async () => {
  const response = await api.get(
    "/spaces"
  );

  return response.data;
};

export const createSpace = async (
  spaceData
) => {
  const response = await api.post(
    "/spaces",
    spaceData
  );

  return response.data;
};

export const updateSpace = async (
  id,
  spaceData
) => {
  const response = await api.put(
    `/spaces/${id}`,
    spaceData
  );

  return response.data;
};

export const deleteSpace = async (
  id
) => {
  const response = await api.delete(
    `/spaces/${id}`
  );

  return response.data;
};