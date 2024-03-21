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
            className="max-w-sm"
          >
            {children}
          </code>
        ),
        ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
        ul: ({ children }) => <ul className="list-disc">{children}</ul>,
        li: ({ children }) => <li className="mb-2">{children}</li>,
        p: ({ children }) => <p className="mb-2">{children}</p>,
        h1: ({ children }) => <h1 className="mb-2 text-2xl">{children}</h1>,
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownMessage;
