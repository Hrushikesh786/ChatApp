import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/Authprovider.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // const isSelected = selectedConversation?._id === user._id;
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-[70%] bg-gray-900 text-white ">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(92vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
};

export default Right;
const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser)
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome{" "}
          <span className="font-semibold text-xl">{authUser.user.fullname}</span>
          <br />
          No Chat selected,please select chat if you have to start conversation
        </h1>
      </div>
    </>
  );
};
