# Step 1: Use an official Node.js image as the base
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port your app runs on (default for React is 3000)
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "start"]