import { ImageList, ImageListItem } from "@mui/material";
import photo1 from "../../assets/photo-grid/dennis-photogrid-1.jpg";
import photo2 from "../../assets/photo-grid/dennis-photogrid-2.jpg";
import photo3 from "../../assets/photo-grid/dennis-photogrid-3.jpg";
import photo4 from "../../assets/photo-grid/dennis-photogrid-4.jpg";

const PhotoGrid = () => {
  return (
    <ImageList variant="masonry" cols={2} gap={16}>
      <ImageListItem>
        <img
          src={photo1}
          alt="Dennis Kenney on the set of dancing with the stars"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo2}
          alt="Dennis Kenney in a modern office building in front of a television interview video camera"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo3}
          alt="Dennis Kenney on the TV show Good Morning America appearing as a guest"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={photo4}
          alt="Dennis Kenney doing a Ted Talk at Babson College"
        />
      </ImageListItem>
    </ImageList>
  );
};

export default PhotoGrid;
