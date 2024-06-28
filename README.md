# Stack to use:

- TailwindCss
- Flowbite Components
- Vue.js with Nuxt
- Compositions API with typescript
- Backend NodeJs Fastify
- Run Proyect with Docker Compose
- Backend Run in Port 4000
- Front end in Port 3000


# Folder Structure

````
/flanks-proyect
|-- /frontend                    # Frontend source files
|   |-- /assets                  # Static files like images and fonts
|   |-- /components              # Vue components
|   |-- /composables             # Vue composables
|   |-- /layouts                 # Nuxt layouts
|   |-- /pages                   # Nuxt pages
|   |-- /plugins                 # Vue plugins
|   |-- /stores                  # Vuex store files
|   |-- nuxt.config.js           # Nuxt configuration file
|-- /backend                     # Backend source files
|   |-- server.js                # Basic entry point for the Fastify server
|-- docker-compose.yml           # Docker-compose file to orchestrate services
|-- .gitignore                   # Specifies intentionally untracked files to ignore
|-- README.md                    # README for the project overview
````

# Steps to Initialize

Run command in root folder
`````
docker-compose up --build -d
``````

Backend will run in
````
http://localhost:4000/
````

Frontend will run in
````
http://localhost:3000/
````

Test user is
````
admin
````

Password is
````
password
````

# Preview

<h2 align="center">
<img width="100%" src="https://raw.githubusercontent.com/omarjesusperezortiz/flanks-project/main/misc/preview.png" alt="preview">
</h2>

