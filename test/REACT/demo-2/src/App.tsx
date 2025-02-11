import { useState } from 'react'
import './App.css'
import Child from './Child';

function App() {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h1>Hello</h1>
            { message }
            <Child setMessage={ setMessage }/>
        </div>
    );
}

export default App
