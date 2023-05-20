# ServerStatusMonitor

Server Status Monitoring is a web application built with Node.js, Express.js, and MongoDB that allows you to monitor the online status of servers by periodically checking their availability using ICMP ping requests. It provides an API to manage and retrieve server information, including status and last ping time.

## Features

- Add servers with name, IP address, and region
- Retrieve a list of all servers
- Retrieve detailed information about a specific server
- Periodically check the online status of servers and update the database

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/server-status-monitoring.git

2. Change to the project directory:

   ```bash
   cd server-status-monitoring
   
3. Run the setup script:

   ```bash
   ./setup.sh

4. Access the application:

   Open your web browser and visit http://localhost:3000 to access the server status monitoring application.

## API Endpoints

- `GET /servers` - Retrieves a list of all servers
- `GET /servers/:id` - Retrieves detailed information about a specific server

## Customization

- Modify the server.js file to customize the application behavior, such as the server status checking interval or additional server fields.
- Customize the HTML/CSS templates in the server.js file to change the appearance of the web pages.

## License

This project is licensed under the <a href="#">MIT License.</a>


<br>

<div align="center">
	<img src="https://github.com/SathiraSriSathsara/SathiraSriSathsara/blob/main/icon.png" width="40">
	<h4>Sathira Sri Sathsara @ 2023</h4>
</div>	


