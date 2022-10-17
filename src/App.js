import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
