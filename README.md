# CORS Proxy with Express.js

This project sets up a **CORS Anywhere Proxy** using **Express.js** and **http-proxy-middleware**. It allows you to bypass CORS restrictions by dynamically proxying requests to any target URL specified as a query parameter. You can use this proxy for various projects that require CORS handling.

## Features

- **Dynamic Target URL**: Forward requests to any target URL by specifying it in the query parameter.
- **CORS Support**: Cross-Origin Resource Sharing (CORS) is enabled for all requests.
- **Proxy Middleware**: Built using `http-proxy-middleware` to forward requests.
- **Express.js**: Lightweight server framework used to manage the proxy.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/cors-proxy.git
   cd cors-proxy
   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Running the server**:
   ```bash
   node index.js
   ```
   The server will start on the default port 8080, or you can specify a custom port by setting the PORT environment variable.
