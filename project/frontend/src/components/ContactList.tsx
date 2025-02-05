import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchContacts } from '../redux/contactSlice';
import ContactCard from "./ContactCard";

export default function ContactList() {
    const dispatch = useDispatch<AppDispatch>();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLetter, setFilterLetter] = useState<string>("All");
  
    // Fetch contacts on component mount
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
  
    // Filter contacts based on search and alphabetical filter
    const displayedContacts = contacts
        .filter((contact) => !contact.bookmarked)
        .filter((contact) => contact.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .filter((contact) => (filterLetter === "All" ? true : contact.name.startsWith(filterLetter)))
        .sort((a, b) => a.name.localeCompare(b.name));
  
    return (
        <section className="bg-white p-4 rounded-lg shadow-md flex-1 flex flex-col">
            {/* Header: Search and Actions */}
            <div className="flex justify-between items-center gap-4 mb-4">
                {/* Search Input and A-Z Filter */}
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Filter by name..."
                        className="border p-2 rounded-md w-40"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
  
                    {/* A-Z Filter Buttons */}
                    <div className="flex gap-1">
                        <button
                            className={`px-2 font-semibold cursor-pointer ${
                            filterLetter === "All" ? "text-blue-600 underline" : "text-gray-600"
                        }`}
                            onClick={() => setFilterLetter("All")}
                        >
                            All
                        </button>
                    
                        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                        <button
                            key={letter}
                            className={`px-2 font-semibold cursor-pointer ${
                            filterLetter === letter ? "text-blue-600 underline" : "text-gray-600"
                        }`}
                            onClick={() => setFilterLetter(letter)}
                        >
                            {letter}
                        </button>
                        ))}
                    </div>
                </div>
  
            </div>
  
            {/* Contact List */}
            <div className="flex flex-wrap gap-4">
                {displayedContacts.length > 0 ? (
                displayedContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
                ) : (
                <p className="text-gray-500">No contacts available</p>
                )}
            </div>
        </section>
    );
}