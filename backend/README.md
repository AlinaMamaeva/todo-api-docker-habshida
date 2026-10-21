# Todo API with Docker

This is my Todo API project built with Node.js, Express, TypeScript, and MongoDB.

The application allows users to create, view, update, and delete Todo tasks. I used Docker to run the backend application in containers.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB and Mongoose
- Docker
- Docker Compose
- Socket.IO

## Features

- Create new Todo tasks
- View all tasks
- Update and delete tasks
- Store tasks in MongoDB
- Check server status
- Run the backend using Docker
- Hot reload in development mode

## How to Run the Project

**1.** Make sure Docker Desktop is installed and running.

**2.** Open the backend folder:

```bash
cd backend
```

**3.** Create a `.env` file in the backend folder and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

**4.** Build and start the application:

```bash
docker compose up -d --build
```

**5.** Check if the server is running:

```bash
curl http://localhost:3000/health
```

**6.** Get all Todo tasks:

```bash
curl http://localhost:3000/api/todos
```

The backend runs on port `3000`.

## Development Mode

To run the application in development mode:

```bash
docker compose -f compose.dev.yaml up -d --build
```

The development server runs on port `3001` and supports hot reload when the code changes.

## Docker Commands

Check running containers:

```bash
docker ps
```

View application logs:

```bash
docker compose logs
```

Stop the production application:

```bash
docker compose down
```

Stop the development application:

```bash
docker compose -f compose.dev.yaml down
```

## Docker Setup

I created two Dockerfiles:

- `Dockerfile` — for production
- `Dockerfile.dev` — for development

The production Dockerfile uses a multi-stage build to make the final image smaller.

Docker Compose helps me build and run the application more easily.

## Project Structure

```text
todo-project/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── compose.yaml
│   ├── compose.dev.yaml
│   ├── package.json
│   └── .env.example
├── frontend/
└── README.md
```

## Notes

- MongoDB is used to store Todo tasks.
- Environment variables are stored in a `.env` file.
- The `.env` file should not be uploaded to GitHub.
- Docker makes it easier to run the application in different environments.