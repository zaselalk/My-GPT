import React from "react";
import Markdown from "react-markdown";

const SystemMessage = ({ role }) => {
  return (
    <div>
      <div key={role} className="absolute top-4 left-1/2">
        <div className="p-2 bg-blue-800 rounded-lg">
          <p className="text-sm text-white te">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SystemMessage;
