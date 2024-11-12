import { Web, LinkedIn, Instagram } from "@mui/icons-material";
import "./SocialIcons.scss";

const SocialIcons = ({ altColor }) => {
  return (
    <section className="social">
      <a
        href="https://www.instagram.com/ivylevelspeaking/"
        target="_blank"
        className="social__icon"
      >
        <Instagram sx={{ fill: altColor }} />
      </a>
      <a
        href="https://www.linkedin.com/in/denniskenney/"
        target="_blank"
        className="social__icon"
      >
        <LinkedIn sx={{ fill: altColor }} />
      </a>
      <a
        href="https://www.arroyastudio.com/"
        target="_blank"
        className="social__icon"
      >
        <Web sx={{ fill: altColor }} />
      </a>
    </section>
  );
};

export default SocialIcons;
