
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from 'dist' (where bundle.js will be)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve static assets from 'public' (e.g., favicon, images)
app.use(express.static(path.join(__dirname, 'public')));

// Function to read index.html and inject API_KEY
const serveIndexWithApiKey = (res) => {
  const indexPath = path.join(__dirname, 'index.html');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Error loading application.');
    }

    const apiKey = process.env.API_KEY || ''; // Default to empty string if not set

    // Inject the API_KEY into a global variable for client-side scripts
    // This makes `process.env.API_KEY` available via `window.process.env.API_KEY`
    // The JSON.stringify ensures the key is properly escaped if it contains special characters.
    const result = data.replace(
      '<script id="env-vars"></script>',
      `<script>
        window.process = { 
          env: { 
            API_KEY: ${JSON.stringify(apiKey)}
          } 
        };
      </script>`
    );
    res.setHeader('Content-Type', 'text/html');
    res.send(result);
  });
};

// All GET requests that are not for static assets already served
// (like /dist/bundle.js or files in /public) will serve index.html.
// This supports SPAs with client-side routing.
app.get('*', (req, res) => {
  // Check if the request path looks like a file extension for a common static asset type.
  // This helps prevent serving index.html for missing static assets.
  if (/\.(css|js|png|jpg|jpeg|gif|ico|svg|webmanifest|map)$/i.test(req.path)) {
    // If it looks like a static asset that wasn't found by express.static, send 404.
    return res.status(404).send('Resource not found');
  }
  // Otherwise, serve the index.html (which will handle client-side routing).
  serveIndexWithApiKey(res);
});

app.listen(port, () => {
  console.log(\`SA Budget Queen app listening at http://localhost:${port}\`);
  console.log('Serving index.html from:', path.join(__dirname, 'index.html'));
  console.log('Serving /dist from:', path.join(__dirname, 'dist'));
  console.log('Serving /public from:', path.join(__dirname, 'public'));
  if (!process.env.API_KEY) {
    console.warn('Warning: API_KEY environment variable is not set. The application might not function correctly.');
  }
});
