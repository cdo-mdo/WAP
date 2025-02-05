import { RequestHandler, ErrorRequestHandler } from 'express';
import { getContacts, getContactbyId, addContact, updateContact, deleteContact } from '../services/contactServices';

export const get_contacts: RequestHandler = async (req, res, next) => {
    const contacts = await getContacts();
    res.json(contacts);
}

export const get_one_contact: RequestHandler = async (req, res, next) => {
    const contact = await getContactbyId(req.params.id);
    if (!contact) {
        res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
}

export const add_contact: RequestHandler = async (req, res, next) => {
    const result = await addContact(req.body);

    if (result.error) {
        res.status(400).json({ errors: result.error });
    }

    res.status(201).json(result);
}

export const update_contact: RequestHandler = async (req, res, next) => {
    const result = await updateContact(req.params.id, req.body);

    if (result.error) {
        res.status(400).json({ errors: result.error });
    }

    res.status(201).json(result);
}

export const delete_contact: RequestHandler = async (req, res, next) => {
    const success = await deleteContact(req.params.id);

    if (!success) {
        res.status(404).json({ message: "contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
}

export const route_not_found: RequestHandler = (req, res, next) => {
    next(new Error('Route not found'));
}

export const error_request_handler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof Error) {
        res.json({ error: error.message });
    }
}