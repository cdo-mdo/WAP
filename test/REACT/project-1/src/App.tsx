import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const is_loading = true;
  const name = "Theo";

  return (
    <>
      <div>{ name ?? 'Guest' }</div>
      { is_loading && <div>Loading...</div> }
      { is_loading ? <div>Loading...</div> : <div>Loaded</div> }
    </>
  )
}

export default App
