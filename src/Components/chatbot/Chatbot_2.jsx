import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Updated to send "question" instead of "q"
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Create bot message object with new keys
      const botMessage = {
        text: data.response || "No response text received.",
        sender: "bot",
        graphImg: data.graph_img, // base64 string
        graphSummary: data.graph_summary,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Server error.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans text-left">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center shadow-md">
            <span className="font-bold">Support Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[90%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.sender === "user"
                    ? "self-end bg-blue-600 text-white rounded-br-none"
                    : "self-start bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                }`}
              >
                {/* Text Response */}
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {/* Graph Image - Rendered if exists */}
                {msg.graphImg && (
                  <div className="mt-3 bg-white p-1 rounded border border-gray-100">
                    <img
                      src={`data:image/png;base64,${msg.graphImg}`}
                      alt="Data Visualization"
                      className="w-full h-auto rounded"
                    />
                  </div>
                )}

                {/* Summary - Rendered if exists */}
                {msg.graphSummary && (
                  <div className="mt-2 p-2 bg-blue-50 text-blue-900 text-xs rounded border border-blue-100 italic">
                    <strong className="block mb-1 not-italic">Summary:</strong>
                    <div className="whitespace-pre-wrap">
                      {msg.graphSummary}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="self-start text-xs text-gray-500 italic ml-2">
                Analyzing data...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex border-t border-gray-200 p-3 bg-white">
            <input
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={isLoading}
            />
            <button
              className={`ml-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
              onClick={handleSend}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center w-14 h-14"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
