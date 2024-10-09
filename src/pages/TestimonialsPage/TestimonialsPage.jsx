import Header from "../../components/Header/Header";
import HeroTestimonials from "./HeroTestimonials/HeroTestimonials";
import Footer from "../../components/Footer/Footer";
import "./TestimonialsPage.scss";
import quoteData from "../../assets/testimonials.json";
import { FormatQuote } from "@mui/icons-material";
import Video from "../../components/Video/Video";
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
          return (
            <article className="testimonials__card" key={index}>
              <p>{quote.quote}</p>
              <p className="testimonials__attribution">
                - {quote.name}
                <br />
                {quote.title}, {quote.company}
              </p>
              <FormatQuote className="testimonials__icon" />
            </article>
          );
        })}
      </section>
      <Video
        url={"https://www.youtube.com/embed/zuG3YXpt4PI?si=D8EUEo0OheEyf0LL"}
        title={"Dennis Kenney | TEDx"}
      />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
