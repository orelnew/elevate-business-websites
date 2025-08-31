import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthGuard from './components/AuthGuard'
import AdminHeader from './components/AdminHeader'
import LandscapingSite from './sites/landscaping/LandscapingSite'
import PlumbingSite from './sites/plumbing/PlumbingSite'
import BusinessPricingSite from './sites/business-pricing/BusinessPricingSite'
import HomePage from './components/HomePage'

function App() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <AdminHeader />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/landscaping/*" element={<LandscapingSite />} />
              <Route path="/plumbing/*" element={<PlumbingSite />} />
              <Route path="/business-pricing/*" element={<BusinessPricingSite />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthGuard>
  )
}

export default App
