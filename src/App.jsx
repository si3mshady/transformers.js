import React, { useState } from 'react';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to fetch the response and update the response state
    setResponse('This is a sample response.');
    setMessage('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#333',
      }}
    >
      <style>
        {`
          .chat-box {
            background-color: #000;
            color: #0f0;
            font-family: monospace;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
            width: 80%;
            max-width: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .chat-input {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .chat-input input {
            flex-grow: 1;
            background-color: #0f0;
            color: #000;
            border: none;
            padding: 10px;
            font-family: monospace;
            font-size: 16px;
            margin-right: 10px;
          }

          .chat-input button {
            background-color: #0f0;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-family: monospace;
            font-size: 16px;
            cursor: pointer;
          }

          .chat-response {
            background-color: #0f0;
            color: #000;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 16px;
            height: 200px;
            overflow-y: auto;
          }
        `}
      </style>

      <div className="chat-box">
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="chat-response">{response}</div>
      </div>
    </div>
  );
}

export default ChatInterface;