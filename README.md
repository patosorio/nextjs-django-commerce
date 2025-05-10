# Modern, scalable E-commerce Platform

## Development Setup Guide

### Project Structure
```
naturwest-shop/
├── backend/           # Django backend
│   ├── Dockerfile    # Python 3.11 setup
│   ├── .env          # Backend environment variables
│   ├── requirements.txt
│   ├── core/         # Django project directory
│   └── api/          # Django REST API app
├── client/           # Next.js frontend
│   ├── Dockerfile    # Node 18 setup
│   ├── .env.local    # Frontend environment variables
│   └── package.json
└── docker-compose.yml
```

### Prerequisites
- Docker and Docker Compose
- Python 3.11+ (for local development)
- Node.js 18+ (for local development)
- PostgreSQL 15+ (handled by Docker)
- Redis 7+ (handled by Docker)

### Environment Files Setup

1. Backend Environment (backend/.env):
   ```
   DEBUG=True
   SECRET_KEY=your-secret-key
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/naturwest
   ALLOWED_HOSTS=localhost,127.0.0.1
   CORS_ALLOWED_ORIGINS=http://localhost:3000
   ```

2. Frontend Environment (client/.env.local):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

### Docker Setup

1. Backend Dockerfile (backend/Dockerfile):
   ```dockerfile
   FROM python:3.11-slim
   
   WORKDIR /app
   
   # Install system dependencies
   RUN apt-get update && apt-get install -y \
       postgresql-client \
       && rm -rf /var/lib/apt/lists/*
   
   # Install Python dependencies
   COPY requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt
   
   # Copy project files
   COPY . .
   
   # Run migrations and start server
   CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
   ```

2. Frontend Dockerfile (client/Dockerfile):
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   # Install dependencies
   COPY package*.json ./
   RUN npm install
   
   # Copy project files
   COPY . .
   
   # Expose port 3000
   ENV PORT=3000
   
   # Build and start the application
   CMD ["npm", "run", "dev"]
   ```

### Running the Project

#### Using Docker (Recommended)

1. Start all services:
   ```bash
   docker-compose up -d
   ```

2. View service logs:
   ```bash
   # All services
   docker-compose logs -f
   
   # Specific service
   docker-compose logs -f [service_name]  # backend|frontend|db|redis
   ```

3. Stop all services:
   ```bash
   docker-compose down
   ```

#### Local Development (Alternative)

1. Backend Setup:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

2. Frontend Setup:
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Accessing Services

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api
- Database: localhost:5432
  - Username: postgres
  - Password: postgres
  - Database: naturwest
- Redis: localhost:6379

### Database Management

1. View database logs:
   ```bash
   docker-compose logs -f db
   ```

2. Access PostgreSQL CLI:
   ```bash
   docker-compose exec db psql -U postgres -d naturwest
   ```

3. Useful PostgreSQL commands:
   ```sql
   \l                 -- List all databases
   \dt                -- List all tables
   \d table_name      -- Describe table
   \q                 -- Quit psql
   ```

### Troubleshooting

1. Port Conflicts:
   - If port 3000 is in use, stop the conflicting process:
     ```bash
     lsof -i :3000    # Find process
     kill <PID>       # Stop process
     ```
   - Same for other ports (8000, 5432, 6379)

2. Docker Issues:
   - Ensure Docker Desktop is running
   - Try rebuilding services: `docker-compose up --build`
   - Clean up: `docker-compose down -v` (warning: removes volumes)

### Daily Development Workflow

#### Backend Development
1. Activate virtual environment:
   ```bash
   cd backend
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. Run Django development server:
   ```bash
   python manage.py runserver
   ```

#### Frontend Development
1. Start Next.js development server:
   ```bash
   cd client
   npm run dev
   ```

#### Docker Development
1. Start all services:
   ```bash
   docker-compose up
   ```

2. Rebuild services after dependency changes:
   ```bash
   docker-compose up --build
   ```

3. View logs:
   ```bash
   docker-compose logs -f [service_name]
   ```

### Environment Files
- Backend: `/backend/.env`
  - Contains Django settings, database credentials, and API keys
  - Never commit to version control

- Frontend: `/client/.env.local`
  - Contains Next.js environment variables
  - Public variables must be prefixed with `NEXT_PUBLIC_`
  - Never commit to version control

### API Integration
- Frontend connects to backend via `NEXT_PUBLIC_API_URL` in `.env.local`
- Default development URL: `http://localhost:8000/api`
- CORS is configured in Django to allow frontend requests

## Introduction

This e-commerce project is a modern, scalable platform built with Next.js and Django, designed to handle both B2C and B2B operations. The platform features a robust architecture that prioritizes performance, security, and user experience while maintaining cost efficiency.

### Key Features
- Full-featured e-commerce storefront
- B2B and B2C customer management
- AI-powered chatbot for customer support
- Integrated shipping with Sendcloud
- Secure payment processing
- Advanced analytics and reporting
- SEO-optimized for better visibility
- Mobile-first, responsive design

## Table of Contents

1. [Architecture Overview](#architecture-overview)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Component Roles and Interactions](#component-roles-and-interactions)
   - [Infrastructure](#infrastructure)
   - [DevOps](#devops)
   - [Integrations](#integrations)

2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Development Setup](#development-setup)
   - [Environment Configuration](#environment-configuration)
   - [Running the Project](#running-the-project)

3. [Project Structure](#project-structure)
   - [Frontend Structure](#frontend-structure)
   - [Backend Structure](#backend-structure)
   - [Infrastructure](#infrastructure)

4. [Development Guidelines](#development-guidelines)
   - [Coding Standards](#coding-standards)
   - [Git Workflow](#git-workflow)
   - [Testing Strategy](#testing-strategy)
   - [Security Checklist](#security-checklist)

5. [Deployment](#deployment)
   - [Deployment Strategy](#deployment-strategy)
   - [Monitoring](#monitoring)
   - [Backup Strategy](#backup-strategy)

6. [Documentation](#documentation)
   - [API Documentation](#api-documentation)
   - [Architecture Decisions](#architecture-decisions)
   - [User Guides](#user-guides)
   - [Contributing Guidelines](#contributing-guidelines)

7. [Costs and Resources](#costs-and-resources)
   - [Infrastructure Costs](#infrastructure-costs)
   - [Third-party Services](#third-party-services)
   - [Resource Requirements](#resource-requirements)

8. [Support and Maintenance](#support-and-maintenance)
   - [Monitoring and Alerts](#monitoring-and-alerts)
   - [Backup Procedures](#backup-procedures)
   - [Update Procedures](#update-procedures)
   - [Security Updates](#security-updates)

## Architecture Overview

### Frontend
- Next.js (App Router) hosted on Vercel
- TailwindCSS + shadcn/ui
- React Query for server state management
- Zustand for lightweight client state (not now)
- TypeScript
- SSR + ISR for SEO, sitemap, robots.txt (not now)
- Customer "My Account" dashboard (not now)
- Shopping cart, checkout, promo codes

### Backend
- Django + Django REST Framework
- Django Admin (customized)
- Celery + Redis for async tasks
- VendoService API for B2C payments
- Sendcloud API for shipping
- Langchain + OpenAI chatbot
- SMTP for transactional emails

### Component Roles and Interactions

#### Communication Systems
- **Website Chatbot**
  - Embedded directly in React frontend
  - Powered by Django backend + Langchain
  - Handles real-time customer support queries
  - Maintains conversation context

- **WhatsApp Integration**
  - Uses WhatsApp Business API/Twilio
  - Sends proactive order updates and notifications
  - Listens and processes customer replies
  - Handles automated responses

- **Django Backend Orchestration**
  - Central hub for all communication systems
  - Routes messages between systems
  - Manages user data and order information
  - Handles escalation paths for complex queries
  - Integrates with CRM and order management

- **Background Processing**
  - Celery + Redis for async operations
  - Processes WhatsApp notifications
  - Handles message queuing
  - Prevents API blocking
  - Manages scheduled notifications

### Infrastructure
- PostgreSQL on Cloud SQL
- Redis for caching and sessions
- Cloud Run for backend services
- Google Cloud CDN
- Google Cloud Storage

### DevOps
- GitHub Actions for CI/CD
- Terraform for IaC
- Google Cloud Monitoring
- Sentry for error tracking

### Integrations
- VendoService (payments)
- Sendcloud (shipping)
- WhatsApp API
- Mailgun/Sendgrid

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Docker and Docker Compose
- PostgreSQL 15+
- Redis 7+

### Development Setup
1. Clone the repository
2. Set up development environment
3. Configure environment variables
4. Start development servers

### Environment Configuration
- Development
- Staging
- Production
- A/B Testing

### Running the Project
1. Start backend services
2. Start frontend development server
3. Run database migrations
4. Initialize test data

## Development Guidelines
[Link to development workflow and coding standards]

## Deployment
[Link to deployment strategy]

## Documentation
[Link to API documentation and guides]

## Costs and Resources
[Monthly cost estimates and resource requirements]

## Support and Maintenance
[Monitoring, backup, and update procedures]

---

## License
[License information]

## Contributing
[Contributing guidelines]

## Contact
[Contact information]
