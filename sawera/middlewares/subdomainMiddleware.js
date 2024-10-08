// Middleware to handle subdomain requests
export const subdomainMiddleware = (req, res, next) => {
    const host = req.hostname; // Get the host (e.g., seller.yalla.com)
  
    // Check if the request is from the seller subdomain
    if (host.startsWith('seller')) {
      req.subdomain = 'seller'; // Add a custom property to req object for identifying the subdomain
    }
    
    next();
  };
  