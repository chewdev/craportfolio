##Startup
Clone git repo locally
Ensure Node and npm are installed locally (check package.json for required node version under engines section)
Run "npm install" in terminal from main craportfolio directory (Run "npm install --include=dev" if running in production env)
Run "cd client/" in terminal to move to client directory
Run "npm install" again in client directory (Again run "npm install --include=dev" if running in production env)

##Development
Add necessary secret keys in config/keys_dev.js
If MySQL Server is already on machine, start the server, otherwise install MySQL server and start server locally on machine
Ensure credentials match in config/keys_dev.js
In main project folder (craportfolio/) run "npm run dev" to start both server and react app for development

##Production
Ensure node version matches specified version in package.json
In craportfolio/client/ directory, run "npm run build" to build production ready bundle in the craportfolio/client/build/ folder
Ensure all necessary secret keys are added as the appropriate node environment variables or add them in an appropriate ecosystem.config.js file
Start the server in production by running "NODE_ENV=production" then "npm start"
Can also be started by using a process manager such as pm2 with an ecosystem.config.js file "pm2 start ecosystem.config.js --env production"
