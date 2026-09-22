# Premium Dark-Themed Portfolio

A professional, dark-first personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Express.

## Architecture

The project is structured as a monorepo with decoupled frontend and backend logic.

*   `client/`: React frontend powered by Vite.
*   `server/`: Express backend providing the data API.
*   `server/src/data/portfolio.ts`: Centralized typed data source for all portfolio content.

## Prerequisites

*   Node.js (v18+)
*   npm

## Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd Portfolio
    ```
2.  Install all dependencies:
    ```bash
    npm install
    ```

## Development

To run both the frontend and backend concurrently in development mode:

```bash
npm run dev
```

*   Frontend runs at: `http://localhost:5173`
*   Backend API runs at: `http://localhost:3001`

## Production Build

To build both the frontend and backend for production:

```bash
npm run build
```

To start the production server (serves the built frontend and starts API):

```bash
npm start
```

## Adding Your Content

### 1. Personal Information & Projects
All portfolio data (bio, skills, projects, links) is centralized in one file for easy editing.
Edit: `server/src/data/portfolio.ts`

### 2. Profile Photo
Replace the placeholder image located at:
`client/public/images/profile.webp`

Ensure the image is in `.webp`, `.jpg`, or `.png` format and is named `profile.webp`. It should ideally have a 4:5 aspect ratio.

### 3. Email Configuration
Currently, the contact form validates input and simulates a successful submission. To connect a real email provider (like Resend or Nodemailer), modify the contact service logic in:
`server/src/controllers/contactController.ts`

## Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

## Styling & Theme

The theme utilizes Tailwind CSS v4 variables defined in `client/src/index.css`. You can customize the core accent color by changing the `--accent` variable.

```css
:root {
  --accent: #d4af37; /* Change this to your preferred accent color */
}
```

## Accessibility & SEO

The site includes semantic HTML, full keyboard navigation, respects `prefers-reduced-motion` settings, and includes placeholder meta tags for SEO. Add your specific keywords and titles in `client/index.html`.
