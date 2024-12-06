import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// Utility to add JWT

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT

const clearAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk("auth/register", async () => {
  try {
  } catch (error) {}
});

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const login = createAsyncThunk("auth/login", async () => {
  try {
  } catch (error) {}
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
  } catch (error) {}
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk("auth/refresh", async () => {
  try {
  } catch (error) {}
});
