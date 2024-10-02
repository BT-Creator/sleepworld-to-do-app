FROM node:lts as build
WORKDIR /app

# Copy required configs
COPY package.json .
COPY package-lock.json .

COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.node.json .

COPY vite.config.ts .

# Copy source code
COPY index.html .
COPY src ./src

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Build the production image
FROM httpd:latest as production
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 8080:80
