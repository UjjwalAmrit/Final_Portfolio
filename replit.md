# Ujjwal Amrit Portfolio

## Overview

This is a personal portfolio website built for Ujjwal Amrit, a full-stack developer. The application is a modern single-page web application featuring a comprehensive showcase of skills, projects, experience, and a contact form. The portfolio includes sections for hero introduction with animated typing effects, about information, skills categorization, project galleries, professional experience timeline, and a functional contact form that stores inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture. It uses Vite as the build tool for fast development and optimized production builds. The application utilizes Wouter for client-side routing, providing a lightweight alternative to React Router. State management is handled through React Query (TanStack Query) for server state and React's built-in state management for local component state.

The UI layer is built on top of Radix UI primitives with custom styling using Tailwind CSS. This provides accessible, customizable components with consistent design patterns. The theme system supports dark/light mode switching with persistent storage, implemented through a custom theme provider that manages CSS custom properties.

### Styling and Design System
The application uses a comprehensive design system based on shadcn/ui components, which provides a consistent set of reusable UI components. Tailwind CSS handles all styling with a custom configuration that includes design tokens for colors, spacing, and typography. The design system supports theme switching and uses CSS custom properties for dynamic theming.

### Backend Architecture
The backend follows a lightweight Express.js architecture with TypeScript. It implements a minimal REST API with a single endpoint for contact form submissions. The server uses a storage abstraction pattern with an in-memory implementation for development, allowing for easy migration to persistent storage solutions like databases.

The server includes middleware for request logging, error handling, and JSON parsing. Development setup integrates with Vite for hot module replacement and seamless full-stack development experience.

### Data Layer
Currently uses an in-memory storage implementation for development purposes. The data models are defined using Drizzle ORM schemas with PostgreSQL dialect configuration, indicating preparation for database integration. The schema defines user management and contact message storage with proper TypeScript type generation.

Form validation is implemented using Zod schemas that integrate with the database models, ensuring type safety and validation consistency across the application.

### Development and Build System
The project uses a modern development setup with TypeScript for type safety across both frontend and backend. The build system uses Vite for the frontend with React plugin and esbuild for backend compilation. The configuration supports development features like runtime error overlay and hot module replacement.

The project structure separates concerns clearly with dedicated directories for client-side code, server code, and shared utilities/schemas. Path aliases are configured for clean imports and better developer experience.

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible React components including dialogs, dropdowns, forms, and navigation elements
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing and autoprefixer for browser compatibility
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **class-variance-authority**: Utility for creating consistent component variants with TypeScript support

### Frontend Framework and Utilities
- **React 18**: Core frontend framework with modern features like concurrent rendering
- **TanStack React Query**: Server state management for API calls, caching, and synchronization
- **Wouter**: Lightweight client-side routing solution for navigation
- **React Hook Form**: Form management with validation and performance optimization
- **date-fns**: Date manipulation and formatting utilities

### Backend Framework
- **Express.js**: Web application framework for Node.js handling HTTP requests and middleware
- **connect-pg-simple**: Session store for PostgreSQL integration (prepared for future use)

### Database and Data Management
- **Drizzle ORM**: TypeScript-first ORM with PostgreSQL support for type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider for cloud database hosting
- **Zod**: Schema validation library for runtime type checking and form validation

### Development Tools
- **TypeScript**: Type system providing compile-time type checking and enhanced developer experience
- **Vite**: Build tool and development server with fast hot module replacement
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins for Replit-specific features and error handling