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
      const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
      console.log("API Key:", apiKey);

      const apiKey1 = process.env.REACT_APP_NEW_VAR;
      console.log("test Key:", apiKey1);

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