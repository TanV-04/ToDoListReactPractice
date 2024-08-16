import React from "react";
import penToSquare from "../images/pen-to-square-svgrepo-com.svg";
import trash from "../images/trash-xmark-alt-svgrepo-com.svg";

export default function ToDo({ task }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
      <p className="text-gray-800 text-base mr-3">{task.task}</p>
      <div className="flex items-center space-x-2">
        <img
          src={penToSquare}
          alt="Edit"
          className="w-6 h-6 cursor-pointer hover:brightness-90 ml-2 mr-3"
        />
        <img
          src={trash}
          alt="Delete"
          className="w-6 h-6 cursor-pointer hover:brightness-90 ml-3"
        />
      </div>
    </div>
  );
}
