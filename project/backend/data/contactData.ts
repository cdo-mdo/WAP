import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, 'contacts.json');

/**
 * Initialize the contacts storage file if it does not exist
 */
async function init() {
    try {
        await fs.access(dataFilePath);
    }
    catch (error) {
        await fs.writeFile(dataFilePath, JSON.stringify([]), 'utf-8');
    }
}

/**
 * Read contacts from the JSON file
 * @return {Promise<Array>} contacts list
 */
async function readContacts() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(data);
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
    await fs.writeFile(dataFilePath, JSON.stringify(contacts, null, 2), 'utf-8');
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
export async function getById(id) {
    const contacts = await readContacts();
    return contacts.find(contact => contact.id === id) || null;
}

/**
 * Add new contact
 * @param {Object} contact - Contact data (name, phone, email, bookmarked)
 * @return {Promise<Object>} the newly created contact
 */
export async function add(contact) {
    const contacts = await readContacts();
    const newContact = {
        id: uuidv4(),
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        bookmarked: contact.bookmarked || false,
    };
    contacts.push(newContact);
    await writeContacts(contacts);
    return newContact;
}

/**
 * Update a contact by ID
 * @param {string} id - Contact ID
 * @param {Object} updatedData - New contact data
 * @return {Promise<Object|null>} the updated contact or null if not found
 */
export async function update(id, updatedData) {
    const contacts = await readContacts();
    const index = contacts.findIndex(contact => contact.id === id);
    
    if (index === -1) return null;

    contacts[index] = { ...contacts[index], ...updatedData};
    await writeContacts(contacts);
    return contacts[index];
}

/**
 * Delete a contact by ID
 * @param {string} id - Contact ID
 * @return {Promise<boolean>} true if deleted, false if not found
 */
export async function remove(id) {
    let contacts = await readContacts();
    const newContacts = contacts.filter(contact => contact.id !== id);

    if (contacts.length === newContacts.length) {
        return false; // ID not found
    }

    await writeContacts(newContacts);
    return true;
}

// Initialize storage when module is imported
init();
