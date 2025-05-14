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
   - [Integrations & Infrastructure](#integrations--infrastructure)
   - [DevOps](#devops)

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

```
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
```


Backend Architecture Based on Directory Distribution
|- app/ Directory: This is the core of your application. It contains:
|──── __init__.py: This file is used to initialize your Flask app and configure extensions like Firebase. It can also register blueprints.
|────  config.py: Contains configuration settings for different environments (development, production).
extensions.py: Initializes and configures third-party extensions like Firebase.
|────  models/: Contains data models, possibly for Firestore or SQL.
|──── api/: Contains route definitions and logic for handling HTTP requests.
|──── services/: Contains business logic that can be reused across different parts of the application.
|────  tasks/: Contains asynchronous tasks, possibly using Celery.
|────  utils/: Contains utility functions and decorators.
|────  migrations/: Used for database migrations if using SQLAlchemy.
|──── tests/: Contains test cases for your application.
|──── firebase/: Could be used for Firebase-specific logic or configurations.


### Integrations & Infrastructure

| **Feature**                            | **Function**                                                                 | **Service / Tool**                                 |
|----------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------|
| **User Authentication**               | Sign up, login, session management                                           | Firebase Authentication (Frontend)                |
| **Token validation**                  | Securing backend routes                                                      | Firebase Admin SDK (in Flask API)                 |
| **Product Catalog**                   | B2C product display, filtering, search                                       | Cloud SQL (Postgres) + Indexed API via Flask      |
| **Customer Data**                     | Preferences, history, saved items, custom pricing                           | Firestore                                          |
| **B2C Payments**                      | Online checkout, cards, receipts                                             | Vendosystem API                                   |
| **B2B Orders**                        | Manual invoicing, quote to order flow                                        | Flask + Firestore                                 |
| **Shipping Automation**               | Real-time shipping updates, tracking, label printing                         | Sendcloud API                                     |
| **Invoice Generation (B2C)**          | Auto-generate PDF after purchase                                             | Flask + GCP Cloud Tasks or Cloud Functions        |
| **Invoice Management (B2B)**          | Manually triggered invoices + PDF + email                                   | Flask + Firestore + Storage                       |
| **Chatbot Assistant**                 | FAQ, support automation                                                      | Langchain + Flask API + Firestore session storage |
| **User Dashboard (Orders, Profile)**  | React-based account view                                                     | Firestore (real-time data)                        |
| **Admin Dashboard (Orders, Clients)** | Analytics, filtering, sorting, manual control                               | Flask APIs + Firestore/SQL + React (ShadCN UI)    |
| **File Uploads (B2B quotes, photos)** | Upload images or docs per user/project                                       | Firebase Storage                                  |
| **Realtime Order Status**             | Status updates like “Packed”, “Shipped”                                      | Firestore (frontend) + Flask API (backend update) |
| **Async Tasks (PDF, Notifications)**  | Long-running or retry-safe jobs                                              | Cloud Tasks or Pub/Sub + Cloud Functions          |
| **Scheduled Jobs**                    | Daily reports, cleanup, auto email reminders                                | Cloud Scheduler + Cloud Tasks                     |
| **SEO-Friendly Pages**                | SSR catalog/product pages                                                    | Next.js (Server-Side Rendering)                   |
| **RGPD Compliance (Data download/deletion)** | User can download or delete their data                                 | Flask + Firestore export logic                    |
| **Logs & Monitoring**                | App behavior, failed tasks, user errors                                      | Google Cloud Logging + Error Reporting            |
| **Deployment (Backend)**             | Serve Flask APIs in production                                               | Cloud Run                                         |
| **Deployment (Frontend)**            | Serve React app with fast CDN                                                | Vercel / Firebase Hosting                         |
| **CI/CD Pipeline**                   | Automated build/test/deploy                                                  | GitHub Actions + GCP Deploy (optional)            |


### DevOps


## License
[MIT License](/LICENSE)

## Contact
patosorio.88@gmail.com