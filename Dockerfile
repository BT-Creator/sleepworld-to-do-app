FROM node:lts AS build
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
FROM busybox:latest AS production
RUN adduser -D appuser
USER appuser
WORKDIR /home/appuser
COPY --from=build /app/dist .
CMD [ "busybox", "httpd", "-f", "-p", "8080" ]
