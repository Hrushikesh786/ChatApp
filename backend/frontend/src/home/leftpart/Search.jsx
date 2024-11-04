import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) => 
      user.fullname.toLowerCase().includes(search.toLowerCase())
      // setSelectedConversation(allUsers.find(user=>user.fullname===search))
      // setSearch("")
  );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
    else{
      toast.error("User Not Found")
    }
  };
  return (
    <div className="h-[10vh] mb-2">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className=" flex space-x-3">
            <label className="bg-slate-900 border-[1px] border-gray-500 rounded-lg  flex w-[80%] items-center gap-2">
              <input
                type="text"
                className="px-5 bg-slate-900 bg-transparent  grow outline-none"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-900 duration-1 rounded-full" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
