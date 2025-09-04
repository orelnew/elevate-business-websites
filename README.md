# Elevate Business Websites - Sales Sites Platform

A comprehensive multi-industry website platform for showcasing business website designs and pricing to potential clients. Features multiple business verticals with authentication-protected access.

## Purpose

This platform serves as a sales tool for website agencies, providing interactive demos of business websites across different industries. It allows prospects to explore website features, pricing models, and design capabilities in a controlled environment.

## Features

- 🏢 **Multi-Industry Support**: Landscaping, Plumbing, Business Pricing sites
- 🔐 **Authentication Required**: Netlify Identity for secure access
- 📱 **Responsive Design**: Mobile-first approach across all sites
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- ⚡ **Fast Performance**: Vite-powered development and builds
- 🔄 **Easy Navigation**: Seamless routing between different business verticals

## Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM for SPA navigation
- **Authentication**: Netlify Identity Widget
- **State Management**: React hooks + TanStack Query
- **Form Handling**: React Hook Form + Zod validation
- **Hosting**: Netlify with automatic deployment

## Business Verticals

### 1. Landscaping Site (`/landscaping/*`)
- Garden design showcases
- Service portfolio examples
- Seasonal maintenance packages
- Before/after project galleries
- Local area targeting demos

### 2. Plumbing Site (`/plumbing/*`)
- Emergency service features
- Residential/commercial services
- Customer testimonials
- Service area mapping
- Pricing calculator demos

### 3. Business Pricing Site (`/business-pricing/*`)
- Website pricing packages
- Feature comparison tables
- ROI calculators
- Client success stories
- Consultation booking flows

## Project Structure

```
src/
├── components/        # Shared components
│   ├── ui/           # shadcn/ui components
│   ├── AuthGuard.tsx # Authentication wrapper
│   ├── AdminHeader.tsx # Navigation header
│   └── HomePage.tsx  # Landing page
├── sites/            # Business vertical sites
│   ├── landscaping/  # Landscaping business demo
│   ├── plumbing/     # Plumbing business demo
│   └── business-pricing/ # Website pricing demo
├── hooks/            # Custom React hooks
└── lib/             # Utility functions
```

## Usage

### For Sales Teams
1. **Access Control**: Share protected URL with prospects
2. **Guided Demos**: Walk clients through different business examples
3. **Interactive Experience**: Let clients explore features hands-on
4. **Pricing Transparency**: Show clear pricing models and packages
5. **Lead Generation**: Capture interest through interactive elements

### For Development
```bash
# Development
npm install
npm run dev          # Start dev server at localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

## Authentication Setup

1. **Netlify Identity**: Enable in Netlify dashboard
2. **Access Control**: Configure allowed users/domains
3. **Email Templates**: Customize invitation emails
4. **External Auth**: Optional Google/GitHub OAuth

## Key Features

### Authentication Flow
- Protected routes require login
- Seamless Netlify Identity integration
- Automatic redirects for unauthorized access
- User session management

### Responsive Design
- Mobile-first responsive layouts
- Touch-friendly interfaces
- Cross-device compatibility
- Modern browser support

### Performance Optimized
- Code splitting by business vertical
- Lazy loading of components
- Optimized bundle sizes
- Fast initial page loads

## Integration Points

- **Sales Dashboard**: Can generate direct links to specific verticals
- **URL Shortener**: Clean URLs for client sharing
- **Analytics**: Track client engagement and interests
- **Lead Capture**: Integration with CRM systems

## Environment Variables

```env
# Netlify automatically provides these
VITE_NETLIFY_SITE_URL=your_site_url
VITE_NETLIFY_CONTEXT=production|deploy-preview|branch-deploy
```

## Deployment

Automatic deployment via Netlify:
1. **GitHub Integration**: Auto-deploy on push to main
2. **Build Settings**: 
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. **Environment**: Production variables auto-configured
4. **Branch Deploys**: Preview deployments for feature branches

## Extending the Platform

### Adding New Business Verticals
1. Create new directory in `/src/sites/`
2. Add route in `App.tsx`
3. Implement business-specific components
4. Update navigation in `AdminHeader.tsx`

### Customization Options
- **Branding**: Update colors, fonts, logos
- **Content**: Modify business-specific copy and images  
- **Features**: Add/remove functionality per vertical
- **Pricing**: Update pricing models and calculators

## Security

- **Authentication Required**: All content behind login
- **Secure Hosting**: Netlify's CDN and security features
- **Access Logging**: Track who accesses what content
- **Environment Isolation**: Separate staging/production environments

---

## Quick Start

1. Clone repository
2. Install dependencies: `npm install`
3. Configure Netlify Identity
4. Deploy to Netlify
5. Start showcasing professional website designs! 🚀
