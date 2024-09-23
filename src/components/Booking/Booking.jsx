import "./Booking.scss";

const Booking = () => {
  return (
    <div className="booking">
      <h2 className="booking__title">
        Have 15 minutes to unlock your speaking potential?
      </h2>
      <p className="booking__text">
        Book a free consultation with Dennis to identify your strengths, improve
        your delivery, and outline a personalized road map towards confident,
        impactful communication.
      </p>
      <a
        href="https://calendly.com/ivylevelspeaking/30min"
        className="button__main"
        target="_blank"
      >
        book now
      </a>
    </div>
  );
};

export default Booking;
