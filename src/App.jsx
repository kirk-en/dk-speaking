import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.scss";
import CoachingPage from "./pages/CoachingPage/CoachingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
