import "../../Hero.scss";

const HeroChoaching = () => {
  return (
    <>
      <div className="hero hero--left">
        <aside className="hero__left">
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

export default HeroChoaching;
