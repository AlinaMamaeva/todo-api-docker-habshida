# Real-time Collaborative TODO App

A full-stack TODO application built with React, Node.js, Express, TypeScript, MongoDB, and Socket.IO.

The application allows multiple users to manage tasks together and see updates instantly without refreshing the page.

## Technologies Used

**Frontend**
- React
- Vite
- JavaScript
- Socket.IO Client

**Backend**
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Socket.IO

## Features

- Create new tasks
- Edit existing tasks
- Mark tasks as completed or active
- Delete tasks
- Filter tasks by status
- Clear completed tasks
- Real-time synchronization across browser tabs
- Online user presence tracking
- Shared workspace using Socket.IO rooms

## Real-time Events

The application uses Socket.IO to synchronize changes between connected clients.

- `workspace:join` — Join the shared workspace
- `workspace:leave` — Leave the shared workspace
- `todo:created` — Notify clients when a task is created
- `todo:updated` — Notify clients when a task is updated
- `todo:deleted` — Notify clients when a task is deleted
- `presence:update` — Update the online user count

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AlinaMamaeva/todo-front-back-habshida.git
cd todo-front-back-habshida
```

### 2. Install Backend dependencies

```bash
cd backend
npm install
```

Create a `.env` file and configure your MongoDB connection using the environment variables required by the backend.

Start the development server:

```bash
npm run dev
```

The Backend runs on port 3000.

### 3. Install Frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Start the Frontend:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## Testing Real-time Features

1. Open the application in two browser tabs.
2. Create a task in the first tab.
3. Verify that the task appears automatically in the second tab.
4. Update or delete a task and verify that both tabs synchronize.
5. Close one tab and verify that the online user count decreases.

## Project Status

The required real-time TODO features have been implemented and tested locally.