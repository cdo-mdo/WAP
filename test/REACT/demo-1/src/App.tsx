import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Theo from './Theo'
import './App.css'

function App() {
    const [quote, setQuote] = useState('');
    
    useEffect(() => {
        async function getQuote() {
            const response = await fetch('https://api.kanye.rest/');
            const responseBody: { quote: string; } = await response.json();
            setQuote(responseBody.quote);
        }
        getQuote();
    }, []);

    return ( 

        <div>{quote}</div>

        <div><Theo color="white" /></div>
    )
}

export default App
