import Header from '../../components/Header/Header';
import HeroTestimonials from './HeroTestimonials/HeroTestimonials';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import './TestimonialsPage.scss';
import quoteData from '../../assets/testimonials.json';
import Video from '../../components/Video/Video';
import videoThumbnail from '../../assets/ted-stage.jpg';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Booking from '../../components/Booking/Booking';
const TestimonialsPage = () => {
  usePageMeta(
    'Client Testimonials | Dennis Kenney | Ivy Level Speaking',
    'What executives, faculty, and students say about working with communication coach Dennis Kenney.'
  );
  return (
    <>
      <div className="top-section top-section__testimonials">
        <Header />
        <HeroTestimonials />
      </div>

      <h1 className="testimonials__headline">In Their Words</h1>
      <p className="testimonials__intro">
        The people below walked into high stakes rooms: job talks, client
        pitches, conference stages, and classrooms. Here is how they describe
        the work.
      </p>
      <section className="testimonials__list">
        {quoteData.map((quote, index) => {
          return <TestimonialCard quote={quote} key={index} />;
        })}
      </section>
      <Booking />
      <Video
        url={'https://www.youtube.com/embed/zuG3YXpt4PI?si=D8EUEo0OheEyf0LL'}
        title={'Dennis Kenney | TEDx'}
        videoThumbnail={videoThumbnail}
      />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
