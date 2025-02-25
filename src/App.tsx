
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

function App() {

  return (
    <>
       <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className="flex-grow">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
          </Routes>
          </div>
        </div>
       </BrowserRouter>
    </>
  )
}

export default App
