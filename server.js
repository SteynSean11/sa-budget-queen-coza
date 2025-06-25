const express = require('express');
const path = require('path');

const app = express();
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