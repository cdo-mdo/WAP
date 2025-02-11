import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    console.log(`App re-rendered`);
    const [count, setCount] = useState(0);
    const handleClick = () => { setCount((prevCount) => prevCount + 1); };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>increment</button>
        </div>
    );
}

export default App
