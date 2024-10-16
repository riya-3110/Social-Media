import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/LoginPage/Login";
import { Profile } from "./pages/Profile/Profile";
import { Register } from "./pages/RegisterPage/Register";
import { ForgetPass } from "./pages/ForgetPassword/ForgetPass";
import { FeedPage } from "./pages/FeedPage/FeedPage";
import { ChatPage } from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetPassword" element={<ForgetPass />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
