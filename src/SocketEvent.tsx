import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { io } from "socket.io-client";

const SocketEventListener = () => {
  const notify = (message?: string) => toast(message || "I am clicked!");

  useEffect(() => {
    const socket = io("https://realtime.gawegawe.id"); // Replace with your Socket.io server URL

    // Listen to a specific event from the server
    socket.on("pesan", (data: string) => {
      console.log("Received data from server:", data);
      notify(data);
      // You can update your React state or perform other actions with the data here
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p> Listening to Socket.io events</p>
      <button
        onClick={() => {
          notify();
        }}
      >
        Make me a toast
      </button>
      <Toaster />
    </div>
  );
};

export default SocketEventListener;
