import Header from "../../components/Header/Header";
import HeroTestimonials from "./HeroTestimonials/HeroTestimonials";
import Footer from "../../components/Footer/Footer";
import "./TestimonialsPage.scss";
import quoteData from "../../assets/testimonials.json";
import Video from "../../components/Video/Video";
import videoThumbnail from "../../assets/ted-stage.jpg";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
const TestimonialsPage = () => {
  return (
    <>
      <div className="top-section top-section__testimonials">
        <Header />
        <HeroTestimonials />
      </div>

      <h1 className="testimonials__headline">Testimonials:</h1>
      <section className="testimonials__list">
        {quoteData.map((quote, index) => {
          return <TestimonialCard quote={quote} key={index} />;
        })}
      </section>
      <Video
        url={"https://www.youtube.com/embed/zuG3YXpt4PI?si=D8EUEo0OheEyf0LL"}
        title={"Dennis Kenney | TEDx"}
        videoThumbnail={videoThumbnail}
      />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
