# Modern, scalable E-commerce Platform

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
- Flask API
- Celery + Redis for async tasks
- VendoService API for B2C payments
- Sendcloud API for shipping
- Langchain + OpenAI chatbot
- SMTP for transactional emails

## License
[MIT License](/LICENSE)

## Contact
patosorio.88@gmail.com



backend/
│
├── app/
│   ├── __init__.py              # App factory
│   ├── config.py                # Environment configs (Dev, Prod)
│   ├── extensions.py            # Extensions (Firebase, Stripe, etc.)
│   ├── models/                  # Firestore / SQL model wrappers
│   │   ├── user.py
│   │   ├── order.py
│   │   └── ...
│   ├── api/                     # REST or GraphQL routes
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── orders.py
│   │   ├── payments.py
│   │   └── ...
│   ├── services/                # Business logic (e.g., invoice creation)
│   │   ├── stripe_service.py
│   │   ├── sendcloud_service.py
│   │   └── whatsapp_service.py
│   ├── tasks/                   # Async jobs (e.g. Celery or GCP Tasks)
│   │   ├── send_invoice.py
│   │   └── notify_user.py
│   ├── utils/                   # Common utilities
│   │   ├── decorators.py
│   │   ├── firestore_helpers.py
│   │   └── logger.py
│   └── main.py                  # Entrypoint if running directly
│
├── migrations/                  # If using SQLAlchemy/Cloud SQL
│
├── tests/
│   ├── test_auth.py
│   └── test_orders.py
│
├── requirements.txt
├── .env                         # Secrets (never commit to git)
├── run.py                       # WSGI launcher
└── gunicorn.conf.py             # For production deployment





Backend Architecture Based on Directory Distribution
- app/ Directory: This is the core of your application. It contains:
-- __init__.py: This file is used to initialize your Flask app and configure extensions like Firebase. It can also register blueprints.
-- config.py: Contains configuration settings for different environments (development, production).
extensions.py: Initializes and configures third-party extensions like Firebase.
-- models/: Contains data models, possibly for Firestore or SQL.
-- api/: Contains route definitions and logic for handling HTTP requests.
-- services/: Contains business logic that can be reused across different parts of the application.
-- tasks/: Contains asynchronous tasks, possibly using Celery.
-- utils/: Contains utility functions and decorators.
-- migrations/: Used for database migrations if using SQLAlchemy.
-- tests/: Contains test cases for your application.
-- firebase/: Could be used for Firebase-specific logic or configurations.