const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1> Hello from Azure Kubernetes Service! </h1> <br> </br> <h2> This is awesome </h2>');
  
});

app.get('/me', (req, res) => {
    const containerIP = getContainerIP();
    res.send(`Hello from container ${containerIP}`);
    
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function getContainerIP() {
  const networkInterfaces = os.networkInterfaces();
  // Assuming the container's IP address is the first non-localhost IPv4 address
  for (const interfaceName in networkInterfaces) {
      const addresses = networkInterfaces[interfaceName].filter(addr => addr.family === 'IPv4' && !addr.internal);
      if (addresses.length > 0) {
          return addresses[0].address;
      }
  }
  return 'Unknown';
}


