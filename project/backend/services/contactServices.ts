import { z } from 'zod';
import { Contact } from '../types';
import * as contactData from '../data/contactData'
import * as contactDB  from '../data/contactDB';
import config from '../config';

const contactService = config.useDatabase ? contactDB : contactData;

// Define validation schema using zod
const ContactSchema = z.object ({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email format"),
    bookmarked: z.boolean().optional(),
});

/**
 * Get all contacts
 */
export async function getContacts() {
    return await contactService.get();
}

/**
 * Get contact by Id
 * @param {string} id - contact Id
 */

export async function getContactbyId(id: string) {
    return await contactService.getById(id);
}

/**
 * Add a new contact with validation
 * @param {Object} contactData - Contact details (name, phone, email, bookmarked)
 * @returns {Object} { error: validationErrors } OR { contact: createdContact }
 */
export async function addContact(contactData) {
    const validatedData = ContactSchema.safeParse(contactData);

    if (!validatedData.success) {
        return { error: validatedData.error.format() };
    }

    const newContact = await contactService.add(validatedData.data);

    return { contact: newContact };
}

/**
 * Update a contact by ID with validation
 * @param {string} id - contact ID
 * @param {Object} updatedData - updated contact details
 */
export async function updateContact(id, updatedData) {
    const validatedData = ContactSchema.partial().safeParse(updatedData);

    if (!validatedData.success) {
        return { error: validatedData.error.format() };
    }

    const updatedContact = await contactService.update(id, validatedData.data);

    return { contact: updatedContact };
}

/**
 * Delete a contact by Id
 */
export async function deleteContact(id) {
    return await contactService.remove(id);
}

