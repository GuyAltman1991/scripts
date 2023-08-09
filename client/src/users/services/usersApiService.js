import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const loginWithGoogle = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/loginWithGoogle`, user);

    return data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);

    return data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const signup = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, user);
    return data;
  } catch (error) {
    return Promise.error(error);
  }
};

export const getUserFromServer = async (userId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editUser = async (userId, userFromClient) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/users/${userId}`,
      userFromClient
    );
    console.log(data);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
