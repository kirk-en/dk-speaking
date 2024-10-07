import "./Featured.scss";

const logoFiles = [
  "ABC-News-Logo-2007.png",
  "Columbia-Business-School-Logo-FC-2.png",
  "cmu-wordmark-stacked-r.svg",
  "forbes-logo-black-transparent.png",
  "Fox_News_Logo.png",
  "fox-29-philadelphia-logo.png",
  "general-electric-logo-png-transparent.png",
  "GMA_logo_2021.png",
  "GQ-logo.svg",
  "HBS-styleguide-primary-logo-3-1024x507.png",
  "Johns-Hopkins-University-Logo.png",
  "Northwestern_University_seal.png",
  "nyt.png",
  "QVC-Logo.png",
  "TED-Logo.png",
  "time-logo-transparent.png",
  "tlc-logo-logo.png",
  "Today_logo.svg.png",
  "WNBC_4_NY.svg.png",
  "Yahoo-logo.png",
];

const Featured = () => {
  const doubleLogos = [...logoFiles, ...logoFiles];

  return (
    <section className="featured">
      <h2 className="featured__title">Featured:</h2>
      <figure className="featured__marquee">
        {logoFiles.map((logo, index) => {
          return (
            <img
              src={`${import.meta.env.BASE_URL}logos/${logo}`}
              alt=""
              key={index}
              className="featured__logo"
            />
          );
        })}
      </figure>
      <figure className="featured__marquee">
        {logoFiles.map((logo, index) => {
          return (
            <img
              src={`${import.meta.env.BASE_URL}logos/${logo}`}
              alt=""
              key={index}
              className="featured__logo"
            />
          );
        })}
      </figure>
    </section>
  );
};

export default Featured;
