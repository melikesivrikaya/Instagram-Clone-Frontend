import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Index";
import "./App.css";
import Home from "./pages/home/Index";
import Register from "./pages/register/Index";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
    </div>
  );
}

export default App;
