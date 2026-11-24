import '../../Hero.scss';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <aside className="hero__right">
          <h2 className="hero__headline">Helping Voices Rise. Guiding Ideas to Land.</h2>
          <p className="hero__text">
            Executive communication coaching, keynotes, and brand strategy from
            Dennis Kenney. Professor at NYU Stern. Coach at Harvard Business
            School. Bestselling author. Available in person and virtually,
            worldwide.
          </p>
          <a
            href="https://calendly.com/ivylevelspeaking/consultation"
            className="button__main button__main--lr-zero-margin"
            target="_blank"
          >
            Book a Free 15 Minute Consultation
          </a>
        </aside>
      </div>
    </>
  );
};

export default Hero;
