# Stage 1: Build Vue.js app
FROM node:14.17.6 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built Vue.js app using a lightweight HTTP server
FROM node:14.17.6 as serve

WORKDIR /app
COPY --from=build /app/dist /app

# Install http-server globally
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8081

# Command to start the HTTP server
CMD ["http-server", "-p", "8081"]
