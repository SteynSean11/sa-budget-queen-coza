<<<<<<< HEAD
=======

const path = require('path');
>>>>>>> f018eb8e71503af86ca3ca12123f1cba92c40a7b
const express = require('express');
const path = require('path');

const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3000;

// Serve static files from the 'dist' directory (for your JS bundle)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve other static assets from the root directory (for index.css, images, etc.)
app.use(express.static(path.join(__dirname)));

// For any route that is not a static file, serve the main index.html.
// This is crucial for a Single Page Application (SPA) with client-side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`SA Budget Queen app listening at http://localhost:${port}`);
});
=======
const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');

// Serve all static files from the 'dist' directory created by `npm run build`.
// Vite handles copying assets from 'public' into 'dist' automatically.
app.use(express.static(distPath));

// For any request that doesn't match a static file, serve index.html.
// This is the standard approach for supporting client-side routing in a Single Page Application.
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(\`SA Budget Queen app listening at http://localhost:${port}\`);
  console.log('Serving production build from:', distPath);
  if (!process.env.API_KEY) {
    console.warn('Warning: API_KEY environment variable is not set. The application might not function correctly.');
  }
});
>>>>>>> f018eb8e71503af86ca3ca12123f1cba92c40a7b
