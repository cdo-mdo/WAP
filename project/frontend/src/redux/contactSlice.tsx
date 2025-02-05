import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';

const URL = 'http://localhost:3000';

// Fetch contacts
export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
    const response = await fetch(`${URL}/contacts`);
    return (await response.json()) as Contact[];
});

// Add a new contact
export const addContact = createAsyncThunk("contacts/addContact", async (newContact: Contact, { dispatch }) => {
    await fetch(`${URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
    });
    dispatch(fetchContacts()); // Refresh contacts after adding
});

// ✅ Update bookmark status in backend
export const toggleBookmark = createAsyncThunk("contacts/toggleBookmark", async (contactId: string, { getState, dispatch }) => {
    const state = getState() as { contacts: { contacts: Contact[] } };
    const contact = state.contacts.contacts.find((c) => c.id === contactId);
  
    if (!contact) return;
    
    const updatedContact = { ...contact, bookmarked: !contact.bookmarked };
  
    await fetch(`${URL}/contacts/${contactId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
    });
  
    dispatch(fetchContacts()); // ✅ Refresh contacts after updating
});

// Update contact
export const updateContact = createAsyncThunk("contacts/updateContact", async (updatedContact: Contact, { dispatch }) => {
    await fetch(`${URL}/contacts/${updatedContact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
    });
    dispatch(fetchContacts()); // Refresh contacts after updating
});

// Delete contact
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId: string, { dispatch }) => {
    await fetch(`${URL}/contacts/${contactId}`, { method: "DELETE" });
    dispatch(fetchContacts()); // Refresh contacts after deleting
});

// create slice
const contactSlice = createSlice({
    name: "contacts",
    initialState: { contacts: [] as Contact[] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
        });
    },
});

export default contactSlice.reducer;