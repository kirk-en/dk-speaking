import { ImageList, ImageListItem } from '@mui/material';
import photo1 from '../../assets/photo-grid/cvision-closeup.jpg';
import photoGsd from '../../assets/photo-grid/harvard-gsd-podium.jpg';
import photoZemits from '../../assets/photo-grid/zemits-stage.jpg';
import photo2 from '../../assets/photo-grid/dennis-photogrid-2.jpg';
import photo3 from '../../assets/photo-grid/cvision-stage.jpg';
import photo8 from '../../assets/photo-grid/dennis-photogrid-3.jpg';
import photo4 from '../../assets/photo-grid/dennis-photogrid-4.jpg';
import photo5 from '../../assets/photo-grid/dennis-photogrid-5.jpg';
import photo6 from '../../assets/photo-grid/students.jpg';

import './PhotoGrid.scss';

const PhotoGrid = (): JSX.Element => {
  return (
    <ImageList variant="masonry" cols={2} gap={16} className="photo-grid">
      <ImageListItem>
        <img
          src={photo1}
          className="photo-grid__image photo-grid__image--pos1"
          alt="Dennis Kenney presenting on stage at the C-Vision National Summit in New York"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photoGsd}
          className="photo-grid__image"
          alt="Dennis Kenney at the podium of the Harvard University Graduate School of Design"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photoZemits}
          className="photo-grid__image"
          alt="Dennis Kenney presenting on stage with a headset microphone at a Zemits event"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo2}
          className="photo-grid__image photo-grid__image--pos2"
          alt="Dennis Kenney in a modern office building in front of a television interview video camera"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo3}
          className="photo-grid__image "
          alt="Dennis Kenney delivering his talk Make Your Message Land: The Power of Executive Presence at the C-Vision National Summit"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo6}
          className="photo-grid__image photo-grid__image--pos1"
          alt="Dennis Kenney at Harvard Business School with his students"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo8}
          className="photo-grid__image"
          alt="Dennis Kenney on the TV show Good Morning America appearing as a guest"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo4}
          className="photo-grid__image photo-grid__image--pos1"
          alt="Dennis Kenney doing a Ted Talk at Babson College"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo5}
          className="photo-grid__image photo-grid__image--pos1"
          alt="Dennis Kenney at Columbia Business School as a Speaking Professor"
        />
      </ImageListItem>
    </ImageList>
  );
};

export default PhotoGrid;
