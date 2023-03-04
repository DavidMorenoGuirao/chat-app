import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;

const App = () => {
  // Si no se ha guardado un nombre de usuario en el almacenamiento local, se muestra el formulario de inicio de sesión
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // Función para renderizar el componente ChatFeed, pasando las propiedades del componente ChatEngine como argumento
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
