import React, { useState } from "react";
import axios from "axios";
import "./Agent.css";

const Agent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Clear input immediately for better user experience
    setInput("");

    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "deepseek/deepseek-r1:free", // Ensure the correct model
          messages: updatedMessages
        },
        {
          headers: {
            "Authorization": `Bearer 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`, // Replace with actual API key
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data && response.data.choices) {
        const botMessage = { role: "assistant", content: response.data.choices[0].message.content };
        setMessages([...updatedMessages, botMessage]);
      } else {
        setErrorMessage("Unexpected response format. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setErrorMessage("Failed to get a response. Please check your API key or try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>
            {msg.content}
          </p>
        ))}
        {isLoading && (
          <p className="bot-msg">
            <span className="typing-dots">Typing...</span>
          </p>
        )}
        {errorMessage && <p className="error-msg">{errorMessage}</p>}
      </div>

      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Spongebob anything..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>Send</button>
      </form>
    </div>
  );
};

export default Agent;