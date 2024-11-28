import React, { useState } from "react";

const NameBox = (props) => {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Enter Your Name
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <p className="mt-4 text-gray-600">
          {name && (
            <>
              Hello{" "}
              <span
                className="text-3xl font-bold"
                style={{ color: `${props.currentcolor}` }}
              >
                {name}!
              </span>
              <br />
              How are you?
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default NameBox;
