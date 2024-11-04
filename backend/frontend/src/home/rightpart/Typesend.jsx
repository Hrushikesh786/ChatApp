import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";
const Typesend = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit=async(e)=>{
    // console.log(e)
    e.preventDefault()
    await sendMessages(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex items-center space-x-1 h-[8vh] bg-gray-800 p-2">
        <div className=" w-[70%] mx-4 my-3">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input border-gray-700 rounded-xl w-full text-white px-4 py-3 mt-1  bg-black "
          />
        </div>
        <button className="text-3xl">
          <IoSendSharp />
        </button>
      </div>
    </form>
  );
};

export default Typesend;
