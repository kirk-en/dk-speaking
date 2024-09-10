import "./Featured.scss";

const logoFiles = [
  "ABC-News-Logo-2007.png",
  "Columbia-Business-School-Logo-FC-2.png",
  "Fox_News_Logo.png",
  "fox-29-philadelphia-logo.png",
  "general-electric-logo-png-transparent.png",
  "GMA_logo_2021.png",
  "HBS-styleguide-primary-logo-3-1024x507.png",
  "nyt.png",
  "QVC-Logo.png",
  "time-logo-transparent.png",
  "tlc-logo-logo.png",
  "Today_logo.svg.png",
  "WNBC_4_NY.svg.png",
  "Yahoo-logo.png",
];

const Featured = () => {
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
              height="100px"
              className="featured__logo"
            />
          );
        })}
      </figure>
    </section>
  );
};

export default Featured;
