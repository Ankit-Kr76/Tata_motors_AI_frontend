
import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

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
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const botMessage = {
        text: data.response || "No response text received.",
        sender: "bot",
        graphImg: data.graph_img,
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
        <div
          className={`bg-white shadow-xl flex flex-col border border-gray-200 overflow-hidden transition-all duration-300
          ${
            isFullScreen
              ? "fixed inset-0 w-screen h-screen rounded-none"
              : "absolute bottom-20 right-0 w-96 h-[500px] rounded-lg"
          }`}
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center shadow-md">
            <span className="font-bold">Support Chat</span>

            <div className="flex gap-2">
              {/* Full Screen Button */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="bg-blue-500 px-2 py-1 rounded text-xs hover:bg-blue-700"
              >
                {isFullScreen ? "Exit Full" : "Full Screen"}
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFullScreen(false);
                }}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
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
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.graphImg && (
                  <div className="mt-3 bg-white p-1 rounded border border-gray-100">
                    <img
                      src={`data:image/png;base64,${msg.graphImg}`}
                      alt="Data Visualization"
                      className="w-full h-auto rounded"
                    />
                  </div>
                )}

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
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
};

export default Chatbot;
