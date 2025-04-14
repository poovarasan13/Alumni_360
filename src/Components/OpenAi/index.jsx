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
        headers: {
          "Content-Type": "application/json",
        },
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
      console.error("API error:", err);
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
      <div 
        key={msg.id} 
        className={`d-flex mb-3 ${isUser ? "justify-content-end" : "justify-content-start"}`}
      >
        <div 
          className={`card ${isUser ? "bg-primary text-dark" : isDarkMode ? "bg-dark" : "bg-light"} shadow-sm`}
          style={{ maxWidth: "80%", borderRadius: "15px" }}
        >
          <div className="card-body p-3">
            <div className="d-flex align-items-center mb-2">
              <div className={`badge ${isUser ? "bg-light text-primary" : "bg-secondary"} me-2`}>
                {isUser ? "You" : "AI"}
              </div>
              <small className={isDarkMode ? "text-light" : "text-muted"}>
                {new Date(msg.id).toLocaleTimeString()}
              </small>
            </div>
            <div className="card-text">
              {isCode ? (
                <pre className={`${isDarkMode ? "bg-dark" : "bg-light"} text-dark p-3 rounded`} style={{ whiteSpace: "pre-wrap" }}>
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
    <div className={`d-flex flex-column vh-100 ${isDarkMode ? "bg-dark text-dark" : "bg-light"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="flex-grow-1 overflow-auto p-4 mt-5 pt-5" style={{ backgroundColor: isDarkMode ? "#1a1a1a" : "#f8f9fa" }}>
        <div className="container pt-5">
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
              <div className={`card ${isDarkMode ? "bg-dark" : "bg-light"} shadow-sm`} style={{ maxWidth: "80%", borderRadius: "15px" }}>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="badge bg-secondary me-2">AI</div>
                  </div>
                  <div className="d-flex">
                    <div className="spinner-border spinner-border-sm text-secondary me-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mb-0">Thinking...</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Always visible input form */}
      <div className={`p-3 ${isDarkMode ? "bg-dark" : "bg-light"} border-top`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className={`form-control ${isDarkMode ? "bg-secondary text-dark border-dark" : ""}`}
                    placeholder="Type your message..."
                    aria-label="Type your message"
                    aria-describedby="button-send"
                    style={{
                      height: "60px",
                      borderRadius: "5px",
                      boxShadow: "none",
                      borderRight: "none"
                    }}
                  />
                  <button
                    className={`btn ${isDarkMode ? "btn-primary" : "btn-primary"} d-flex align-items-center`}
                    style={{ height: "60px", borderRadius: "0 5px 5px 0" }}
                    type="submit"
                    disabled={loading}
                    id="button-send"
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        Send
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}