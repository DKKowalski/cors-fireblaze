const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

// Enable CORS for all incoming requests
app.use(cors());

// Health check route
app.get("/", (req, res) => {
  res.send("Hello, CORS Proxy is running!😶‍🌫️");
});

// Create the proxy with a dynamic target
app.use("/proxy", (req, res, next) => {
  // Target server is passed as a query parameter
  const target = req.query.target;

  if (!target) {
    return res.status(400).json({ error: "Target URL is required" });
  }

  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader("User-Agent", "Mozilla/5.0"); // Set a User-Agent if required
      proxyReq.setHeader("Origin", target); // Set Origin header to mimic the request origin
      console.log(`Proxying request to: ${target}${req.url}`);
    },
    onError: (err, req, res) => {
      console.error("Error proxying request:", err);
      res.status(500).json({ error: "Proxy error" });
    },
  })(req, res, next);
});

// Start the Express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`CORS Proxy server running on port ${PORT}`);
});
