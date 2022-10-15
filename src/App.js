import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LandingPage />
    </div>
  );
}

export default App;
