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
            href="https://calendly.com/ivylevelspeaking/30min"
            className="button__main button__main--lr-zero-margin"
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
