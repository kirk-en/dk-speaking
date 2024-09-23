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
      <a className="button__main" href="">
        book now
      </a>
    </div>
  );
};

export default Booking;
