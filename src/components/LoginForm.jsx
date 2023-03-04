import { useState } from "react";
import axios from "axios";

const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
      setError("");
    } catch (error) {
      setError("Opps, credenciales erroneas.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">DMG - Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Usuario"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Contraseña"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>LOGIN</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
