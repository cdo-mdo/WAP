import { v4 as uuidv4 } from 'uuid';
import config from '../config';
const db = require('./db');

/**
 * Read contacts from db
 * @return {Promise<Array>} contacts list
 */
async function readContacts() {
    try {
        const [rows] = await db.query("SELECT * FROM contacts");
        const contacts = rows.map(contact => ({
            ...contact,
            bookmarked: Boolean(contact.bookmarked) // ✅ Convert 1 → true, 0 → false
        }));

        return contacts;
    }
    catch (error) {
        return [];
    }
}

/**
 * Write contacts to the JSON file
 * @param {Array} contacts - List of contacts to save
 */
async function writeContacts(contacts) {
    const { id, name, phone, email, bookmarked } = contacts;
    await db.query("INSERT INTO contacts (id, name, phone, email, bookmarked) VALUES (?, ?, ?, ?, ?)",
                [id, name, phone, email, bookmarked ?? false]);
}

/**
 * Get all contacts
 */
export async function get() {
    return await readContacts();
}

/**
 * Get a contact by ID
 * @param {string} id - Contact ID
 * @return {Promise<Object|null>} the contact object or null if not found
 */
export async function getById(id: string) {
    const row = await db.query("SELECT * FROM contacts WHERE id=?", id);
    const contact = {row, bookmarked: Boolean(row.bookmarked)};
    return contact;
}

/**
 * Add new contact
 * @param {Object} contact - Contact data (name, phone, email, bookmarked)
 * @return {Promise<Object>} the newly created contact
 */
export async function add(contact) {
    const { name, phone, email, bookmarked } = contact;
    const id = uuidv4();

    try {
        await db.query("INSERT INTO contacts (id, name, phone, email, bookmarked) VALUES (?, ?, ?, ?, ?)",
                [id, name, phone, email, bookmarked ?? false]);
        return contact;        
    }
    catch (error) {
        console.error("Database error: ", error);
    }
}

/**
 * Update a contact by ID
 * @param {string} id - Contact ID
 * @param {Object} updatedData - New contact data
 * @return {Promise<Object|null>} the updated contact or null if not found
 */
export async function update(id, updatedData) {
    const { name, phone, email, bookmarked } = updatedData;
    await db.query("UPDATE contacts SET name=?, phone=?, email=?, bookmarked=? WHERE id=?", 
        [name, phone, email, bookmarked, id]);

    return updatedData;
}

/**
 * Delete a contact by ID
 * @param {string} id - Contact ID
 * @return {Promise<boolean>} true if deleted, false if not found
 */
export async function remove(id) {
    await db.query("DELETE FROM contacts WHERE id=?", [id]);
    return true;
}
