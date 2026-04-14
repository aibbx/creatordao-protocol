import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Deck from './pages/Deck'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </BrowserRouter>
  )
}
