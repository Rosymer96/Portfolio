# Rosa Vela's Portfolio

A modern, responsive portfolio website built with **Angular 19** and **SCSS**. Featuring form validation, analytics integration via Adobe Client Data Layer, and responsive design for all screen sizes.

## 🌐 Live Demo

The portfolio is deployed and live at:  
**[https://rosymer96.github.io/Portfolio/](https://rosymer96.github.io/Portfolio/)**

## ✨ Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Contact Form**: Robust client-side validation with real-time error messages
  - Validates email format, required fields, and minimum word count (5 words)
  - Form submission via FormSubmit with visible success/error feedback
  - Tracks form start and abandonment events
- **Analytics Integration**: Adobe Client Data Layer (ACDL) for digital analytics
  - Tracks user interactions: clicks, form submissions, errors, and page abandonment
  - Easy-to-integrate event tracking system
- **Material Design**: Uses Angular Material components for a polished UI
- **Project Showcase**: Dynamic project gallery with links to live demos and GitHub repositories
- **Skills Section**: Display of technical skills with visual hierarchy
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Tech Stack

- **Framework**: Angular 19 (Standalone Components)
- **Styling**: SCSS with responsive media queries
- **Package Manager**: Yarn (dependencies managed via `yarn.lock`)
- **Analytics**: Adobe Client Data Layer (ACDL) v3.0.1
- **UI Components**: Angular Material v19.2.15
- **Form Handling**: Angular Reactive Forms
- **Deployment**: GitHub Pages via `angular-cli-ghpages`

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **Yarn** (v4 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rosymer96/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
yarn install
```

This will install all dependencies including the Adobe Client Data Layer, defined in `yarn.lock` for consistent versions.

### 3. Set Up Adobe Client Data Layer (ACDL)

The Adobe Client Data Layer is already configured in the build pipeline. Here's what's automatically set up:

#### Dependency Installation

ACDL is included in `package.json` as a dependency:

```json
"@adobe/adobe-client-data-layer": "^3.0.1"
```

When you run `yarn install`, it will download and lock the exact version in `yarn.lock`.

#### Script Loading

The ACDL script is automatically injected into the build process via `angular.json`:

```json
"scripts": [
  "node_modules/@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js"
]
```

This means:

- ACDL loads before your application code
- It's available globally as `window.adobeDataLayer`
- The library handles event queuing and management

#### Using ACDL in Your Components

Access ACDL through the custom `DataLayerService`:

```typescript
import { DataLayerService } from "./services/data-layer.service";

export class YourComponent {
  constructor(private dataLayer: DataLayerService) {}

  trackEvent() {
    this.dataLayer.push({
      event: "custom_event",
      eventInfo: {
        action: "user_action",
        component_name: "your_component",
      },
    });
  }
}
```

### 4. Run the Development Server

```bash
yarn start
```

The application will be available at `http://localhost:4200/`

## 📦 Available Scripts

- **`yarn start`** - Start the development server with live reload
- **`yarn build`** - Build the project for production
- **`yarn watch`** - Build and watch for file changes
- **`yarn test`** - Run unit tests with Karma/Jasmine
- **`yarn ng`** - Access Angular CLI directly

## 🗂️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/              # About section component
│   │   ├── contact/            # Contact form with validation
│   │   ├── footer/             # Footer component
│   │   ├── header/             # Navigation header
│   │   ├── home/               # Hero/home section
│   │   ├── project-pill/       # Individual project card
│   │   ├── projects/           # Projects gallery
│   │   └── skills/             # Skills showcase
│   ├── interfaces/
│   │   ├── project.d.ts        # Project data model
│   │   └── skill.d.ts          # Skill data model
│   ├── services/
│   │   └── data-layer.service.ts # ACDL wrapper service
│   ├── app.component.ts         # Root component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Route definitions
├── main.ts                       # Application entry point
├── styles.scss                   # Global styles
└── index.html                    # Main HTML file
public/
├── img-projects/               # Project images
├── skills-logos/               # Technology logos
└── CV_Rosa_Vela.pdf           # Downloadable CV
```

## 📝 Contact Form

The contact form includes:

- **Fields**: Company name, contact person, email, and message
- **Validation**:
  - All fields are required
  - Email format validation (RFC-compliant)
  - Minimum 5 words in message (not just characters)
- **Submission**: Sends via FormSubmit API to `rosymer96@gmail.com`
- **Feedback**: Visual success/error messages to the user
- **Analytics**: Tracks form start, submission, errors, and abandonment via ACDL

### Form Validation Rules

```typescript
company: ['', Validators.required],
contactPerson: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
message: ['', [Validators.required, this.minWordsValidator(5)]],
```

## 📊 Analytics Events via ACDL

The application tracks the following events:

| Event                  | Trigger                        | Data Captured                        |
| ---------------------- | ------------------------------ | ------------------------------------ |
| `form_start`           | User begins filling the form   | Component name, timestamp            |
| `submit`               | Form submitted successfully    | Form data length, submission time    |
| `form_error`           | Form submission fails          | Error message, component name        |
| `form_abandon`         | User leaves without submitting | Fields completed, abandonment reason |
| `click`                | User clicks copy email button  | Action type, component name          |
| `visit_project`        | User clicks project link       | Project title, link clicked          |
| `visit_github_project` | User visits project GitHub     | Project title, repository URL        |

All events are pushed to `window.dataLayer` via the `DataLayerService`.

## 🎨 Styling & Responsive Design

The application uses SCSS with mobile-first responsive design:

- **Mobile** (< 768px): Optimized for small screens
- **Tablet** (768px - 1024px): Medium screen layout
- **Desktop** (1024px - 1280px): Full desktop experience
- **Large Desktop** (1280px - 1536px): Enhanced spacing
- **Extra Large** (1536px+): Maximum layout width

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## 🚢 Deployment to GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
# 1. Build for production
yarn build

# 2. Deploy to GitHub Pages (requires GitHub CLI or git access)
npx angular-cli-ghpages --dir=dist/portfolio-rosa-vela/browser
```

**Configuration Details**:

- `baseHref`: `/Portfolio/` (set in `angular.json` for GitHub Pages routing)
- Build output: `dist/portfolio-rosa-vela`
- Deployment target: `gh-pages` branch

## 🔧 Configuration

### Angular Configuration (`angular.json`)

```json
{
  "outputPath": "dist/portfolio-rosa-vela",
  "baseHref": "/Portfolio/",
  "styles": ["@angular/material/prebuilt-themes/pink-bluegrey.css", "src/styles.scss"],
  "scripts": ["node_modules/@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js"]
}
```

### TypeScript Configuration (`tsconfig.json`)

- Target: ES2022
- Module: ESNext
- Strict mode enabled
- Strict null checks

### Yarn Lock

The project uses Yarn for dependency management. The `yarn.lock` file ensures that:

- All team members use the exact same dependency versions
- ACDL and all other packages remain consistent across installations
- Reproducible builds across environments

## 🧪 Testing

Run tests with:

```bash
yarn test
```

Tests are configured with Karma and Jasmine.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rosa Vela**

- GitHub: [@Rosymer96](https://github.com/Rosymer96)
- LinkedIn: [rosa-vela96](https://www.linkedin.com/in/rosa-vela96/)
- Email: rosymer96@gmail.com
- Portfolio: [https://rosymer96.github.io/Portfolio/](https://rosymer96.github.io/Portfolio/)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- UI components from [Angular Material](https://material.angular.io/)
- Analytics via [Adobe Client Data Layer](https://github.com/adobe/adobe-client-data-layer)
- Form handling with [FormSubmit](https://formsubmit.co/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Package management with [Yarn](https://yarnpkg.com/)

---

**Last Updated**: September 27, 2026

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
