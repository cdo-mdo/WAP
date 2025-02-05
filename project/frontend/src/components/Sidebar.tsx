import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from '../types';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import { contactSchema, validateContact } from '../utils/validation';

export default function Sidebar() {
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bookmarked, setBookmarked] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    // ✅ Generate .vcf content for each contact
    const generateVCF = (contact: Contact) => {
        return `BEGIN:VCARD
                VERSION:3.0
                FN:${contact.name}
                TEL:${contact.phone}
                EMAIL:${contact.email}
                END:VCARD`;
    };

    // ✅ Export All Contacts as VCF & Zip
    const exportAllToZip = async () => {
        const zip = new JSZip();
    
        contacts.forEach((contact) => {
            const vcfContent = generateVCF(contact);
            zip.file(`${contact.name.replace(/\s+/g, "_")}.vcf`, vcfContent);
        });

        const blob = await zip.generateAsync({ type: "blob" });
        saveAs(blob, "contacts.zip");
    };

    // ✅ Check if all fields are filled
    const isFormValid = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";

    const handleSubmit = () => {
        if (!name || !email || !phone) {
            setError("All fields are required!");
            return;
        }

        const newContact = { id: uuidv4(), name, email, phone, bookmarked };

        // ✅ Validate Input Using `zod`
        const result = contactSchema.safeParse(newContact);
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        // ✅ Check for Duplicates
        const duplicateError = validateContact(newContact, contacts);
        if (duplicateError) {
            setError(duplicateError);
            return;
        }

        // Dispatch Redux action to add contact
        dispatch(addContact(newContact));

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setBookmarked(false);
    }

    return (
        <div className="w-80 bg-white p-2 rounded-lg shadow-md flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    
            <input
                type="text"
                placeholder="Name"
                className="border p-2 w-full rounded-md mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
    
            <input
                type="tel"
                placeholder="Phone"
                className="border p-2 w-full rounded-md mb-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full rounded-md mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
    
            <label className="flex items-center gap-2">
            <input className="w-4 h-4"
                type="checkbox"
                checked={bookmarked}
                onChange={(e) => setBookmarked(e.target.checked)}
            />
            Bookmark Contact
            </label>
    
            <button
                className={`mt-4 px-4 py-2 rounded-md w-full ${
                isFormValid ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
                onClick={handleSubmit}
                disabled={!isFormValid}  // ✅ Button is disabled if form is incomplete
            >
                Add Contact
            </button>

            <h2 className="text-xl font-semibold mb-2 mt-4">Export Contacts</h2>
            {/* ✅ Export All Contacts to ZIP */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                onClick={exportAllToZip}
            >
                Export all contacts to zip
            </button>
        </div>
    );
}
