import "./Why.scss";

const Why = () => {
  return (
    <section className="why">
      <h2 className="why__headline">How We’ll Work Together:</h2>
      <article className="why__boxes-container">
        <div className="why__box">
          <h3 className="why__number">#1</h3>
          <h4 className="why__box-headline">Built Around You</h4>
          <p className="why__box-text">
            No templates and no scripts. We start with your goals, your
            audience, and the moment you’re preparing for, then build a plan
            that fits. You’ll get direct, specific feedback in every session.
          </p>
        </div>
        <div className="why__box">
          <h3 className="why__number">#2</h3>
          <h4 className="why__box-headline">Presence and Delivery</h4>
          <p className="why__box-text">
            Learn to use your voice, your body, and the pause with intention.
            You’ll speak with clarity and authority, whether you’re in a
            boardroom, on a stage, or on camera.
          </p>
        </div>
        <div className="why__box">
          <h3 className="why__number">#3</h3>
          <h4 className="why__box-headline">Message and Story</h4>
          <p className="why__box-text">
            A strong delivery needs something worth saying. We’ll sharpen your
            message and structure your story so people remember it, repeat it,
            and act on it.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Why;
