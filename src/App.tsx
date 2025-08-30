import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandscapingSite from './sites/landscaping/LandscapingSite'
import PlumbingSite from './sites/plumbing/PlumbingSite'
import BusinessPricingSite from './sites/business-pricing/BusinessPricingSite'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landscaping/*" element={<LandscapingSite />} />
        <Route path="/plumbing/*" element={<PlumbingSite />} />
        <Route path="/business-pricing/*" element={<BusinessPricingSite />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
