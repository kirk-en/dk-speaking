import { Web, LinkedIn, Instagram } from "@mui/icons-material";
import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <section className="social">
      <a
        href="https://www.instagram.com/ivylevelspeaking/"
        target="_blank"
        className="social__icon"
      >
        <Instagram />
      </a>
      <a
        href="https://www.linkedin.com/in/denniskenney/"
        target="_blank"
        className="social__icon"
      >
        <LinkedIn />
      </a>
      <a
        href="https://www.arroyastudio.com/"
        target="_blank"
        className="social__icon"
      >
        <Web />
      </a>
    </section>
  );
};

export default SocialIcons;
