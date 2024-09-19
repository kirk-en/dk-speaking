import "../../Hero.scss";

const HeroAbout = () => {
  return (
    <>
      <div className="hero">
        <aside className="hero__right">
          <h2 className="hero__headline">Meet Dennis Kenney</h2>
          <p className="hero__text">
            Public Speaking and Communications Expert.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1dYHLEc_DcrhYJ2Bc03tIcOGDOjIT4xu3xAF51IbiCyhQAvMLPeg61PYIso0gSIOV-rmQzYmJ6"
            className="main__button"
            target="_blank"
          >
            Book a Free 15-Minute Consultation
          </a>
        </aside>
      </div>
    </>
  );
};

export default HeroAbout;
