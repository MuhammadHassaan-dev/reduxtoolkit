import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Posts from "./Components/Posts";
import ComC from "./Components/ComA";
import UseRefHook from "./Components/UseRefHook";
import UseReducerHook from "./Components/UseReducerHook";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts/:userId" element={<Posts />} />
          <Route path="/contextapi" element={<ComC />} />
          <Route path="/userefhook" element={<UseRefHook />} />
          <Route path="/usereducehook" element={<UseReducerHook />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
