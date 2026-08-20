# Kitchen Design Planner

A full-stack kitchen planning web application for browsing kitchen products, creating single-wall kitchen designs, validating available space, calculating costs, and saving designs for later editing.

Built with **Next.js, TypeScript, Payload CMS, PostgreSQL, Docker, GitHub Actions, and Azure**.

---

## Features

* Browse kitchen cabinets and appliances
* Search and filter products by category
* View product specifications, dimensions, price, finish, and SKU
* Create and manage kitchen designs
* Set kitchen wall width
* Add, remove, replace, and update product quantities
* Automatically calculate used wall width
* Prevent designs from exceeding available wall space
* Automatically calculate total design cost
* Save designs to PostgreSQL
* Reopen and continue editing saved designs
* Manage products through Payload CMS
* Automated unit, integration, and end-to-end testing
* Docker-based local development
* Automated CI/CD deployment to Azure

---

## Tech Stack

| Area               | Technology               |
| ------------------ | ------------------------ |
| Full Stack         | Next.js, React           |
| Language           | TypeScript               |
| Styling            | Tailwind CSS             |
| CMS                | Payload CMS              |
| Database           | PostgreSQL               |
| Testing            | Vitest, Playwright       |
| Containerisation   | Docker, Docker Compose   |
| CI/CD              | GitHub Actions           |
| Container Registry | Azure Container Registry |
| Deployment         | Azure App Service        |

---

## Application Pages

```text
/products
Product Catalog

/products/[id]
Product Details

/designs
Saved Kitchen Designs

/designs/create
Create Kitchen Design

/designs/[id]
Kitchen Design Editor
```

---

## Architecture

The application uses a **Full-Stack Monolithic Architecture** with Next.js handling both UI and server-side logic.

```text
Browser
   ↓
Next.js Application
   │
   ├── React UI
   ├── Server Components
   ├── Client Components
   ├── Server Actions
   └── Payload CMS
          ↓
      PostgreSQL
```

Server Components are used by default, while Client Components are limited to areas requiring browser-side interaction such as filtering, searching, quantity controls, and design editing.

---

## Database Model

Main entities:

```text
Category
Product
User
KitchenDesign
DesignItem
```

Relationships:

```text
Category 1 ─── N Product

User 1 ─── N KitchenDesign

KitchenDesign 1 ─── N DesignItem

Product 1 ─── N DesignItem
```

Product prices are stored as integer cents and dimensions are stored in millimetres.

---

## Local Development

### Requirements

* Node.js
* npm
* Docker
* Docker Compose

### Clone the repository

```bash
git clone <repository-url>
cd kitchen-design-planner
```

### Configure environment variables

Create:

```text
.env.local
```

Example:

```env
DATABASE_URL=your_postgresql_connection
PAYLOAD_SECRET=your_payload_secret
```

### Start the application

```bash
docker compose up
```

Then open:

```text
http://localhost:3000
```

---

## Testing

Run unit and integration tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npx playwright test
```

Testing covers:

* Price calculations
* Quantity updates
* Wall width validation
* Product and design database operations
* Save and reload behaviour
* Critical user workflows

---

## CI/CD

Pull requests automatically run:

```text
ESLint
↓
TypeScript Type Check
↓
Vitest
↓
PostgreSQL Integration Tests
↓
Next.js Build
↓
Docker Build
```

After changes are merged into `main`:

```text
GitHub Actions
↓
Build Docker Image
↓
Azure Container Registry
↓
Database Migration
↓
Azure App Service
↓
Health Check
↓
Playwright Smoke Test
```

---

## Deployment

The production application is deployed using:

```text
User
↓
Azure App Service
↓
Next.js Docker Container
↓
PostgreSQL
```

Docker images are stored in **Azure Container Registry** and deployed automatically through **GitHub Actions**.
