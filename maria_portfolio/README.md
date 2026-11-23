# Maria Cecilia Cereno — Personal Portfolio

A responsive static portfolio website built with HTML, CSS, and vanilla JavaScript. It can be deployed to Vercel or Netlify without a backend.

## Project structure

- `index.html` — page content
- `assets/style.css` — design and responsive layout
- `assets/script.js` — profile links and mobile navigation

## Preview locally

1. Extract the ZIP file.
2. Open the `maria_portfolio` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Add your professional profile URLs

Open `assets/script.js`. Replace the empty `url` values with your real public profile URLs:

```js
{ name: "LinkedIn", description: "Professional network", symbol: "in", url: "https://www.linkedin.com/in/your-username/" }
```

Do the same for Upwork, JobStreet, Indeed, Glassdoor, and GitHub. The profile cards remain inactive until you add a URL. Do not publish passwords, government ID numbers, or private account details. A platform's identity verification must be completed directly on that platform.

## Edit your information

Open `index.html` and update the text, education dates, experience, project description, email, and location as needed. Before making the site public, check that every detail is accurate and that you want the contact information displayed publicly.

## Deploy to Netlify

1. Sign in at https://www.netlify.com/
2. Choose **Add new site** / **Deploy manually**.
3. Drag the extracted `maria_portfolio` folder (the folder containing `index.html`) into the upload area.

## Deploy to Vercel

1. Sign in at https://vercel.com/
2. Create a new project and import the folder from a GitHub repository, or use the Vercel CLI.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `.`

No build step or environment variables are required.
