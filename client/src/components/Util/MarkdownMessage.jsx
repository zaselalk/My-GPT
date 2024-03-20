import React from "react";
import Markdown from "react-markdown";

const MarkdownMessage = ({ content }) => {
  return (
    <Markdown
      components={{
        pre: ({ children }) => <pre>{children}</pre>,
        code: ({ children }) => (
          <code
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              padding: "0.2rem",
              borderRadius: "0.2rem",
            }}
          >
            {children}
          </code>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownMessage;
