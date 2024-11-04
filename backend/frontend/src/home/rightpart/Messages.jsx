import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage()//listening 
  // console.log(messages);
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behaviour: "smooth" });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id || index} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}
      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[35%]">
            say! hii to start the conversation
          </p>
        </div>
      )}
    </div>
  );
};
// className="flex-1 overflow-y-auto" style={{minHeight:"calc(92vh - 8vh)"}}
export default Messages;
