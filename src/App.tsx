import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import './App.css'
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </div>
  );
}

export default App;
