import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// GET @ /contacts

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", {
        name: newContact.name,
        number: newContact.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ /contacts/:id

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// EDIT @ /contacts/:id
export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
