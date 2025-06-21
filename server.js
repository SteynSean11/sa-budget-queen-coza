
const path = require('path');
const express = require('express');

const app = express();
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
