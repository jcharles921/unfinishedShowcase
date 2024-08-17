FROM node:lts

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .


RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
# Start the Next.js application
CMD ["npm", "run", "dev"]
