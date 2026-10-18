import type { Server } from "socket.io";

interface JoinWorkspaceData {
  workspace: "default";
  username?: string;
}

function setupSocket(io: Server): void {
  // socketId -> username
  const onlineUsers = new Map<string, string>();

  function updatePresence(): void {
    io.to("workspace:default").emit("presence:update", {
      workspace: "default",
      online: onlineUsers.size,
      users: [...onlineUsers.values()],
    });
  }

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on(
      "workspace:join",
      ({ workspace, username }: JoinWorkspaceData) => {
        if (workspace !== "default") return;

        socket.join("workspace:default");

        onlineUsers.set(socket.id, username || "Guest");

        updatePresence();
      },
    );

    socket.on("workspace:leave", () => {
      socket.leave("workspace:default");

      onlineUsers.delete(socket.id);

      updatePresence();
    });

    socket.on("disconnect", () => {
      onlineUsers.delete(socket.id);

      updatePresence();

      console.log("User disconnected:", socket.id);
    });
  });
}

export default setupSocket;
