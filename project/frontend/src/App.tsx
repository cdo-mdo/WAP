import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { fetchContacts } from './redux/contactSlice';

import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import ContactList from "./components/ContactList";
import Sidebar from './components/Sidebar';
import './App.css'

export default function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchContacts()); // Fetch contacts on load
    }, [dispatch]);

    return (
        <div className="h-screen flex flex-col bg-purple-50 p-6">
            <Header />
            <Bookmark />
            <div className="flex flex-row gap-4 mt-4">
                <Sidebar />
                <ContactList />
            </div>
        </div>
    );
}
