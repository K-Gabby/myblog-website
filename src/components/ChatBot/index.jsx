import React, { useState } from "react";
import "./style.css";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [greetingDisplayed, setGreetingDisplayed] = useState(false);

  const toggleChatbox = () => {
    setIsChatOpen((prev) => !prev);
    if (!greetingDisplayed) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { name: "Bot", message: "Hey there! How can I help you today? 😊" },
        ]);
        setGreetingDisplayed(true);
      }, 500);
    }
  };

  const sendMessage = () => {
    if (!inputText) return;

    const userMessage = { name: "User", message: inputText };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { name: "Bot", message: "Typing..." },
      ]);

      fetchChatbotResponse(inputText).then((botResponse) => {
        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove "Typing..." message
          { name: "Bot", message: botResponse },
        ]);
      });
    }, 500);

    setInputText(""); // Clear input field
  };

  const fetchChatbotResponse = async (userMessage) => {
    const apiKey = "AIzaSyCm1Rye1alkjcoPgIC6iWICIZjogZerCT8"; 
    const data = {
      contents: [
        {
          parts: [{ text: userMessage }],
        },
      ],
    };

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      return (
        responseData?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't get a response. Please try again."
      );
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, I couldn't get a response. Please try again.";
    }
  };

  return (
    <div>
      <div
        className="chatbox_icon"
        onClick={toggleChatbox}
        style={{ display: isChatOpen ? "none" : "block" }}
      >
        💬
      </div>
      {isChatOpen && (
        <div className="chatbox">
          <div className="chatbox_support">
            <div className="chatbox_header">
              <img src="/assets/images/chat.png" alt="Bot" />
              <div className="chatbot-title">ChatBot</div>
              <div
                className="chatbox_close"
                onClick={toggleChatbox}
              >
                ✖
              </div>
            </div>
            <div className="chatbox_messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`messages__item ${
                    msg.name === "User"
                      ? "messages__item--operator"
                      : "messages__item--visitor"
                  }`}
                >
                  {/* <img
                    className="messages__img"
                    src={msg.name === "User" ? "/assets/images/user.jpg" : "/assets/images/chat.png"}
                    alt={msg.name}
                  /> */}
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="chatbox_footer">
              <input
                type="text"
                placeholder="Type a Message...."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage} className="chatbox_send--footer">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;