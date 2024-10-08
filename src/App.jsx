import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.scss";
import CoachingPage from "./pages/CoachingPage/CoachingPage";
import SpeakingPage from "./pages/SpeakingPage/SpeakingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
