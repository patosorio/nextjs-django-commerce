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
