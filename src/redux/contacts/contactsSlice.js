import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./contactsOps";
import { selectSearchFilter } from "../filters/filtersSelectors";
import { selectContacts } from "./contactsSelectors";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleReject)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.rejected, handleReject);
  },
});

export const { fetchInprogress, fetchSuccess, fetchError } = slice.actions;

export default slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchFilter],
  (contacts, searchFilter) => {
    if (!searchFilter) return contacts;
    const lowercasedFilter = searchFilter.toLowerCase();
    return contacts.filter((contact) => {
      const isPhoneNumber = !isNaN(searchFilter);
      if (isPhoneNumber) {
        return contact.number.includes(searchFilter);
      } else {
        return contact.name.toLowerCase().includes(lowercasedFilter);
      }
    });
  }
);
