# Donna Pet Photography

A responsive single-page website for Donna's pet photography business. Built with React and a soft, elegant design (lavender, periwinkle, cream palette).

## Tech stack

- **React 18** (Create React App)
- **React Router** – client-side routing
- **Tailwind CSS** – styling and custom theme
- **Framer Motion** – scroll and viewport animations
- **Formik + Yup** – contact form and validation
- **EmailJS** – contact form delivery
- **Font Awesome** – icons

## Project structure

The app lives in the `ddp` folder:

```
ddp/
├── public/
├── src/
│   ├── components/   # Banner, Header, Navbar, Button, SocialLinks, ImageGrid
│   ├── pages/        # Home, Gallery, About, Services, Contact
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
└── package.json
```

## Routes

| Path      | Page     |
|-----------|----------|
| `/`       | Home     |
| `/gallery`| Gallery  |
| `/about`  | About    |
| `/services` | Services |
| `/contact` | Contact  |

## Getting started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install and run

```bash
cd ddp
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
cd ddp
npm run build
```

Output is in `ddp/build/`. The project is set up for Firebase Hosting (see `.firebase/`).

### Run tests

```bash
cd ddp
npm test
```

## Customisation

- **Colours & fonts** – Edit `ddp/tailwind.config.js` (e.g. `colorOne`–`colorFive`, `buttonBlue`, `buttonPurple`, and font families).
- **Contact details** – Update phone and email in the contact section (e.g. in the component that uses `faPhone` / `faEnvelope` and the EmailJS config for the contact form).

## License

Private project.
