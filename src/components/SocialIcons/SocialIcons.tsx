import { LinkedIn, Instagram, YouTube } from '@mui/icons-material';
import { TikTokIcon } from './customIcons';
import './SocialIcons.scss';

interface SocialIconsProps {
  altColor?: string;
}

const ICON_SIZE = 32;

const SocialIcons = ({ altColor }: SocialIconsProps): JSX.Element => {
  return (
    <section className="social">
      <a
        href="https://www.instagram.com/ivylevelspeaking/"
        target="_blank"
        className="social__icon"
      >
        <Instagram sx={{ fill: altColor, fontSize: ICON_SIZE }} />
      </a>
      <a
        href="https://www.linkedin.com/in/denniskenney/"
        target="_blank"
        className="social__icon"
      >
        <LinkedIn sx={{ fill: altColor, fontSize: ICON_SIZE }} />
      </a>
      <a
        href="https://www.youtube.com/@IvyLevelSpeaking"
        target="_blank"
        className="social__icon"
      >
        <YouTube sx={{ fill: altColor, fontSize: ICON_SIZE }} />
      </a>

      <a
        href="https://www.tiktok.com/@ivylevelspeak"
        target="_blank"
        className="social__icon"
      >
        <TikTokIcon sx={{ fill: altColor, fontSize: ICON_SIZE }} />
      </a>
    </section>
  );
};

export default SocialIcons;
