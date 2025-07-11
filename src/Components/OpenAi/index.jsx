import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";

export default function ChatComponent() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [chatLog, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input, id: Date.now() };
    setChatLog((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 800));

      const response = await fetch("http://localhost:9000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chatLog, userMessage] }),
      });

      const data = await response.json();
      const botMessage = {
        role: "assistant",
        content: data.content,
        id: Date.now() + 1,
      };
      setChatLog((prev) => [...prev, botMessage]);
    } catch (err) {
      setChatLog((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          id: Date.now() + 1,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = (msg) => {
    const isUser = msg.role === "user";
    const isCode = msg.content.includes("```");
    const formattedContent = isCode
      ? msg.content.replace(/```[a-zA-Z]*\n?/, "").replace(/```/, "")
      : msg.content;

    return (
      <div key={msg.id} className={`d-flex mb-3 ${isUser ? "justify-content-end" : "justify-content-start"} fade-in`}>
        <div className={`card ${isUser ? "bg-primary text-white" : isDarkMode ? "bg-secondary text-white" : "bg-white text-dark"} shadow rounded-4`} style={{ maxWidth: "75%", padding: "12px 18px", borderRadius: "20px" }}>
          <div className="card-body p-3">
            <div className="d-flex align-items-center mb-2">
              <img src={isUser ? "/user-avatar.png" : "/ai-avatar.png"} alt={isUser ? "User" : "AI"} className="rounded-circle me-2" style={{ width: "35px", height: "35px" }} />
              <div className={`badge ${isUser ? "bg-light text-primary" : "bg-dark text-white"} me-2`}>
                {isUser ? "You" : "AI"}
              </div>
              <small className={isDarkMode ? "text-light" : "text-muted"}>{new Date(msg.id).toLocaleTimeString()}</small>
            </div>
            <div className="card-text">
              {isCode ? (
                <pre className={`${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"} p-3 rounded`} style={{ whiteSpace: "pre-wrap" }}>
                  <code>{formattedContent.trim()}</code>
                </pre>
              ) : (
                <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>{formattedContent}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`d-flex flex-column vh-100 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flex-grow-1 overflow-auto p-4 mt-5 pt-5" style={{ background: isDarkMode ? "linear-gradient(135deg, #1a1a1a, #2c2c2c)" : "linear-gradient(135deg, #f9f9f9, #e8e8e8)" }}>
        <div className="container pt-5" style={{ maxWidth: "720px", margin: "auto" }}>
          {chatLog.length === 0 && (
            <div className="text-center mt-5">
              <div className="card bg-transparent border-0">
                <div className="card-body">
                  <h3>Hello I am OpenAI</h3>
                  <p className="mt-3">How can I help you today?</p>
                </div>
              </div>
            </div>
          )}
          {chatLog.map(renderMessage)}
          {loading && (
            <div className="d-flex justify-content-start mb-3">
              <div className={`card ${isDarkMode ? "bg-secondary" : "bg-light"} shadow-sm rounded-4`} style={{ maxWidth: "75%" }}>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center">
                    <div className="spinner-grow text-secondary me-2" role="status" style={{ width: "1rem", height: "1rem" }} />
                    <span className="text-muted">AI is thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={`p-3 ${isDarkMode ? "bg-dark" : "bg-light"} border-top`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <div className={`chat-input-wrapper ${isDarkMode ? "bg-dark" : "bg-white"} p-3 shadow rounded-3`}>
                <form onSubmit={handleSubmit} className="d-flex">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="form-control flex-grow-1 me-2 rounded-pill"
                    placeholder="Ask me anything..."
                    style={{
                      height: "50px",
                      border: isDarkMode ? "1px solid #444" : "1px solid #ccc",
                      background: isDarkMode ? "#2b2b2b" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  />
                  <button className="btn btn-primary rounded-pill px-4" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
