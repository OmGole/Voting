import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Individual from "./pages/Individual";
import Createpoll from "./pages/Createpoll";
import UserVerification from "./pages/UserVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/individual/:id" element={<Individual />} />
        <Route path="/createpoll" element={<Createpoll />} />
        <Route path="/userverification" element={<UserVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
