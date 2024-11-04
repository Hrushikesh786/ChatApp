import { Server } from "socket.io";
import http from "http";
// import fs from "fs"
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://chatapp-vzd4.onrender.com",
    methods: ["GET", "POST"],
    // credentials:true,
  },
});
//for realtime messaging
export const getReceiverSocketId=(receiverId)=>{
  return users[receiverId]
}


//for hoeing online offline server
const users={}
//used to listen events on server side
io.on("connection", (socket) => {
  // console.log("user connected", socket.id);
  const userId=socket.handshake.query.userId
  if(userId){
    users[userId]=socket.id
    // console.log("Hello",users)
  }
//use to send the events to all connected users or clients
  io.emit("getOnlineUsers",Object.keys(users))
  //socket.on=>used to listen client side event on server side emmited by server side and client
  socket.on("disconnect", () => {
    // console.log("user is disconnected", socket.id);
    delete users[userId]
    io.emit("getOnlineUsers",Object.keys(users))
  });
});

export { app, io, server };
