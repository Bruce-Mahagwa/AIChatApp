import './App.css';
import HeaderPage from './Pages/Header/HeaderPage';
import CharacterPage from './Pages/Character/CharacterPage';
import ChatPage from './Pages/Chat/ChatPage';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // axios.defaults.baseURL = "http://localhost:4000"
  axios.defaults.baseURL = "https://ai-chat-app-backend-sigma.vercel.app"

  return (
    <>
      <HeaderPage />
      <div id = "main-layout">
        <CharacterPage />
        <ChatPage />
      </div>
    </>
  );
}

export default App;
