
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// --- Pre-cache index.html at startup for performance ---
let indexHtmlContent;
try {
  const indexPath = path.join(__dirname, 'index.html');
  const htmlData = fs.readFileSync(indexPath, 'utf8');
  const apiKey = process.env.API_KEY || ''; // Default to empty string if not set

  // Inject the API_KEY into a placeholder script tag.
  // This makes `window.process.env.API_KEY` available to the client.
  // JSON.stringify ensures the key is properly escaped.
  indexHtmlContent = htmlData.replace(
    '<script id="env-vars"></script>',
    `<script>
      window.process = { 
        env: { 
          API_KEY: ${JSON.stringify(apiKey)}
        } 
      };
    </script>`
  );
} catch (err) {
  console.error('FATAL: Could not read or process index.html. The server cannot start.', err);
  process.exit(1); // Exit if the main template file is missing or unreadable
}

// Serve static files from 'dist' (where bundle.js will be)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve static assets from 'public' (e.g., favicon, images)
app.use(express.static(path.join(__dirname, 'public')));

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
  // Otherwise, serve the cached and processed index.html.
  res.setHeader('Content-Type', 'text/html');
  res.send(indexHtmlContent);
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
