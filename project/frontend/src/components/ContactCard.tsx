import { useState, useEffect, useRef, useCallback } from 'react';
import { FiTrash2, FiDownload } from 'react-icons/fi';
import { Contact } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { updateContact, deleteContact, toggleBookmark } from '../redux/contactSlice';
import { saveAs } from 'file-saver';
import { contactSchema, validateContact, normalizePhone } from '../utils/validation';

interface ContactCardProps {
    contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
    const dispatch = useDispatch<AppDispatch>();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(contact);
    const [error, setError] = useState<string | null>(null);

    // ✅ Generate a .vcf file for the contact
    const exportToVCF = () => {
        const vcfContent = `BEGIN:VCARD
        VERSION:3.0
        FN:${contact.name}
        TEL:${contact.phone}
        EMAIL:${contact.email}
        END:VCARD`;

        const blob = new Blob([vcfContent], { type: "text/vcard" });
        saveAs(blob, `${contact.name.replace(/\s+/g, "_")}.vcf`);
    };

    // ✅ Function to Save Contact Changes
    const handleSave = () => {
        const updatedContact = { ...editedContact, 
            phone: normalizePhone(editedContact.phone), 
            bookmarked: editedContact.bookmarked ?? false};

        // ✅ Validate Input Using `zod`
        const result = contactSchema.safeParse(updatedContact);
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }
    
        // ✅ Ignore Current Contact in Duplicate Check
        const duplicateError = validateContact(updatedContact, contacts);
        if (duplicateError) {
            setError(duplicateError);
            return;
        }
    
        dispatch(updateContact(updatedContact));
        setIsEditing(false);
        setError(null);
    };

    // ✅ Function to Cancel Edits & Restore Original
    const handleCancel = useCallback(() => {
        setIsEditing(false);
        setEditedContact(contact); // Restore original contact details
    }, [contact])

    // ✅ Toggle Edit Mode
    const toggleEdit = () => {
        setIsEditing(true);
    };

    // ✅ Detect Click Outside to Exit Edit Mode
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                handleCancel();
            }
        }

        if (isEditing) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleCancel, isEditing]);

    // ✅ Detect ESC Key to Cancel Edit
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleCancel();
            }
        }

        if (isEditing) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleCancel, isEditing]);

    // ✅ Handle toggling bookmark and updating backend
    const handleToggleBookmark = () => {
        dispatch(toggleBookmark(contact.id));
    };

    return (
        <div ref={cardRef} className="relative bg-white border border-gray-300 shadow-md p-6 rounded-md w-80 min-h-28 flex flex-col justify-center">
            {/* ✅ Bookmark Checkbox (Top Right) */}
            <input
                type="checkbox"
                checked={contact.bookmarked}
                onChange={handleToggleBookmark}
                className="absolute top-2 right-2 w-4 h-4 cursor-pointer accent-blue-500"
                title={contact.bookmarked ? "Remove Bookmark" : "Add Bookmark"}
            />

            {/* ✅ Click to Enter/Exit Edit Mode */}
            {isEditing ? (
                <>
                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    <input
                        type="text"
                        className="border rounded-md p-1 mb-1"
                        value={editedContact.name}
                        onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
                        autoFocus
                    />
                    <input
                        type="tel"
                        className="border rounded-md p-1"
                        value={editedContact.phone}
                        onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                    />
                    <input
                        type="email"
                        className="border rounded-md p-1 mb-1"
                        value={editedContact.email}
                        onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
                    />

                    <div className="flex gap-2 mt-2">
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md" onClick={handleSave}>
                            Save
                        </button>
                        <button className="bg-gray-500 text-white px-3 py-1 rounded-md" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold cursor-pointer" onClick={toggleEdit}>
                        {contact.name}
                    </h3>
                    <p className="text-gray-600">☎ {contact.phone}</p>
                    <p className="text-gray-600 break-words">✉ {contact.email}</p>
                </>
            )}

            {/* ✅ Export VCF & Delete Buttons */}
            <div className="absolute bottom-2 left-2 flex gap-2">
                <FiDownload
                    className="text-blue-500 cursor-pointer text-xl"
                    title="Export as VCF"
                    onClick={exportToVCF}
                />
            </div>

            {/* ✅ Delete Button */}
            <FiTrash2 className="absolute bottom-2 right-2 text-red-500 cursor-pointer text-xl" onClick={() => dispatch(deleteContact(contact.id))} />
        </div>
    );
}
