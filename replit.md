# Overview

ВікнаПлюс is a Ukrainian window installation company website built as a full-stack React application. The application serves as a business landing page with a contact form system for potential customers to submit installation requests. The site features a modern, responsive design with sections for company information, services, gallery, customer reviews, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with JSON responses
- **Email**: Nodemailer integration for contact form submissions
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite middleware integration for seamless full-stack development

## Data Storage Solutions
- **Current**: In-memory storage using Map data structure for development/demo purposes
- **Schema**: Drizzle ORM with PostgreSQL schema definitions for production-ready database integration
- **Migration**: Drizzle Kit for database schema management and migrations
- **Contact Submissions**: Structured data storage with validation using Zod schemas

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query for frontend functionality
- **UI Components**: Radix UI primitives with shadcn/ui for accessible, customizable components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography, React Icons for social media icons

### Backend Services
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM for data persistence
- **Email Service**: SMTP integration via Nodemailer for contact form notifications
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Development Tools
- **Build System**: Vite with React plugin for fast development and optimized builds
- **Type Safety**: TypeScript with strict configuration across frontend and backend
- **Code Quality**: ESBuild for production bundling and optimization
- **Replit Integration**: Custom plugins for Replit development environment compatibility

### UI Enhancement Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Animations**: CSS-based animations through Tailwind and Radix UI
- **Utility Libraries**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants