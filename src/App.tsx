import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import './App.css'
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </div>
  );
}

export default App;
