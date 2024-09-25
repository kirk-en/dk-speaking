import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.scss";
import CoachingPage from "./pages/CoachingPage/CoachingPage";
import SpeakingPage from "./pages/SpeakingPage/SpeakingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
