# Stack to use:

- TailwindCss
- Flowbite Components
- Vue.js with Nuxt
- Compositions API with typescript
- Backend NodeJs Fastify
- Run Proyect with Docker Compose
- Backend Run in Port 3000
- Front end in Port 8080


# Folder Structure

````
/financial-advisor-dashboard
|-- /frontend                    # Frontend source files
|   |-- /assets                  # Static files like images and fonts
|   |-- /components              # Vue components
|   |-- /layouts                 # Nuxt layouts
|   |-- /pages                   # Nuxt pages
|   |-- /plugins                 # Vue plugins
|   |-- /store                   # Vuex store files
|   |-- nuxt.config.js           # Nuxt configuration file
|-- /backend                     # Backend source files
|   |-- /config                  # Configuration files for the server, db, etc.
|   |-- /controllers             # Controllers handle the business logic
|   |-- /models                  # Database models
|   |-- /routes                  # API routes
|   |-- /services                # Business logic
|   |-- /utils                   # Utility functions
|   |-- server.js                # Entry point for the Fastify server
|-- /docker                      # Docker related files
|   |-- Dockerfile-frontend      # Dockerfile for the frontend
|   |-- Dockerfile-backend       # Dockerfile for the backend
|   |-- docker-compose.yml       # Docker-compose file to orchestrate services
|-- /tests                       # Test cases for both frontend and backend
|-- .gitignore                   # Specifies intentionally untracked files to ignore
|-- README.md                    # README for the project overview
````

