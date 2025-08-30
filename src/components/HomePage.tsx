import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Elevate Business Websites
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional website solutions for businesses across different industries. 
          Choose your industry to see our specialized offerings.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <Link 
            to="/landscaping" 
            className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-400"
          >
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600">
              Landscaping
            </h3>
            <p className="text-gray-600">
              Professional websites for landscaping and outdoor services businesses
            </p>
          </Link>

          <Link 
            to="/plumbing" 
            className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
              Plumbing
            </h3>
            <p className="text-gray-600">
              Specialized websites for plumbing and home services professionals
            </p>
          </Link>

          <Link 
            to="/business-pricing" 
            className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-400"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">
              General Business
            </h3>
            <p className="text-gray-600">
              Website pricing and packages for all types of businesses
            </p>
          </Link>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          Each industry page is optimized specifically for that business type with relevant content, testimonials, and pricing.
        </div>
      </div>
    </div>
  )
}

export default HomePage