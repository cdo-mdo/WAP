import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchContacts } from "../redux/contactSlice";
import ContactCard from "./ContactCard";
import { useEffect } from "react";

export default function Bookmark() {
    const dispatch = useDispatch<AppDispatch>();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    // ✅ Fetch contacts on component mount & after updates
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const bookmarkedContacts = contacts
        .filter((contact) => contact.bookmarked) // Ensure correct property
        .sort((a, b) => a.name.localeCompare(b.name));

    // console.log("Bookmarked Contacts:", bookmarkedContacts);

    return (
        <section className="bg-white p-4 rounded-lg shadow-md my-4">
            <h2 className="text-xl font-semibold mb-4">Bookmarked Contacts</h2>

            {/* ✅ Ensure horizontal scroll if contacts exceed width */}
            <div className="overflow-x-auto whitespace-nowrap w-ful bp-4">
                <div className="flex gap-4">
                    {bookmarkedContacts.length > 0 ? (
                        bookmarkedContacts.map((contact) => (
                            <div key={contact.id} className="w-80">
                                <ContactCard contact={contact}/>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No bookmarked contacts</p>
                    )}
                </div>
            </div>
        </section>
    );
}
