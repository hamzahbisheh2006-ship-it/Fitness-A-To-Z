import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import SupplementsPage from './pages/Supplements';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
            <Route
                path="/Supplements"
                element={<SupplementsPage/>}
            />
        </Routes>
    </>
  )
}

export default App
