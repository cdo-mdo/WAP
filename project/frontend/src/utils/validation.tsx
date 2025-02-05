import { z } from "zod";
import { Contact } from "../types";

// ✅ Normalize Phone Number (Remove Dashes & Spaces)
export const normalizePhone = (phone: string) => {
    // ✅ Remove all non-numeric characters except dashes
    return phone.replace(/[^\d-]/g, ""); 
};

// ✅ Define Contact Schema with Phone Validation
export const contactSchema = z.object({
    id: z.string(),
    name: z.string().min(1, "Name is required"),
    phone: z.string().regex(/^\d{3}-?\d{3}-?\d{4}$/, "Phone format must be XXX-XXX-XXXX or XXXXXXXXXX"),
    email: z.string().email("Invalid email format"),
    bookmarked: z.boolean().default(false),
});

// ✅ Function to Check for Duplicates (Ignoring Current Contact)
export const validateContact = (newContact: Contact, contacts: Contact[]) => {
    const normalizedPhone = normalizePhone(newContact.phone);

    const phoneExists = contacts.some(
        (contact) => 
        contact.id !== newContact.id &&  // Ignore current contact
        normalizePhone(contact.phone) === normalizedPhone
    );

    const emailExists = contacts.some(
        (contact) => 
        contact.id !== newContact.id &&  // Ignore current contact
        contact.email.toLowerCase() === newContact.email.toLowerCase()
    );

    if (phoneExists) return "Phone number already exists";
    if (emailExists) return "Email already exists";

    return null;
};
