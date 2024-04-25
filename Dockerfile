# Use an official Node runtime as the base image
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Start the application
CMD ["npm", "run dev"]
