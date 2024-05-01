# Use official Node.js image as the base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy application source code
COPY . .

# Install dependencies
RUN npm init -y
RUN npm install express

# Command to run the application
CMD ["node", "index.js"]

