import React from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");
// client-side
socket.on("connection", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
socket.on("hello", (socket) => {
  console.log(socket);
});
export const ChatApp = () => {
  return <div>ChatApp</div>;
};
