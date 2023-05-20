const express = require('express');
const mongoose = require('mongoose');
const ping = require('node-ping');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/server_status', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Create a server schema
const serverSchema = new mongoose.Schema({
  name: String,
  ip: String,
  region: String,
  status: Boolean,
  lastPingTime: Date,
});

// Create a server model
const Server = mongoose.model('Server', serverSchema);

// Route to fetch all servers
app.get('/servers', async (req, res) => {
  try {
    const servers = await Server.find();
    res.json(servers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch a server by ID
app.get('/servers/:id', async (req, res) => {
  try {
    const server = await Server.findById(req.params.id);
    res.json(server);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Function to check server status using ICMP ping
async function checkServerStatus(server) {
  try {
    const pingResult = await ping.promise.probe(server.ip);
    const isOnline = pingResult.alive;
    const lastPingTime = new Date();

    server.status = isOnline;
    server.lastPingTime = lastPingTime;

    await server.save();
  } catch (error) {
    console.error('Error checking server status:', error);
  }
}

// Periodically check server status
setInterval(async () => {
  const servers = await Server.find();
  servers.forEach(server => checkServerStatus(server));
}, 60000); // Check every minute

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
