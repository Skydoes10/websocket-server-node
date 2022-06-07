const socketController = (socket) => {
  console.log("Socket connected", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected", socket.id);
  });

  socket.on("send-message", (payload, callback) => {
    const id = 123456;
    callback({ id, timestamp: Date.now() });

    socket.broadcast.emit("receive-message", payload);
  });
};

module.exports = {
  socketController,
};
