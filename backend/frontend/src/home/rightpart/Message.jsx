import React from "react";

const Message = ({ message }) => {
  //not working
  // const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  // const itsMe = message.senderId === authUser.user._id;
  // working***********************
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const actualMessage = message.newMessage ? message.newMessage : message;
  const itsMe = actualMessage.senderId === authUser.user._id;
// console.log(message.senderId)
// console.log(authUser.user._id)
// console.log("Message object:", message);

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";

  const createdAt=new Date(actualMessage.createdAt)
  const formattedTime=createdAt.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit'
  })

  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {actualMessage.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
