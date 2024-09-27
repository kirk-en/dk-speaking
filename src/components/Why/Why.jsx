import "./Why.scss";

const Why = () => {
  return (
    <section className="why">
      <h2 className="why__headline">How I Can Help You:</h2>
      <article className="why__boxes-container">
        <div className="why__box">
          <h3 className="why__number">#1</h3>
          <h4 className="why__box-headline">Tailored Coaching</h4>
          <p className="why__box-text">
            Receive personalized coaching based on your unique goals, industry,
            and challenges. With a focus on actionable feedback and continuous
            improvement, you'll experience transformative progress that delivers
            lasting results.
          </p>
        </div>
        <div className="why__box">
          <h3 className="why__number">#2</h3>
          <h4 className="why__box-headline">
            Public Speaking & Presentation Mastery
          </h4>
          <p className="why__box-text">
            Develop the skills to speak with clarity and charisma, ensuring your
            message is impactful and memorable. Strengthen your leadership
            presence and influence others through authentic and powerful
            communication.
          </p>
        </div>
        <div className="why__box">
          <h3 className="why__number">#3</h3>
          <h4 className="why__box-headline">Storytelling</h4>
          <p className="why__box-text">
            Learn the art of storytelling to captivate your audience and inspire
            action. Discover Ivy Level techniques to structure your narrative,
            evoke emotion, and tailor stories for maximum engagement.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Why;
