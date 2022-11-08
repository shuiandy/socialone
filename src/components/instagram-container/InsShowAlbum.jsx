import { Grid, Image, Pagination } from "@nextui-org/react";
import { useState } from "react";
export default function InsShowAlbum(props) {
  const images = props.insImg;
  const albumLen = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <Grid.Container direction='column' gap={2}>
      <Grid xs={12}>
        <Image src={images[currentImage]} alt='album-image' />
      </Grid>
      <Grid xs={12} css={{paddingTop: "10px", justifyContent: "center"}}>
        <Pagination
          onlyDots
          rounded
          loop
          total={albumLen}
          color="secondary"
          onChange={(currentImage) => setCurrentImage(currentImage - 1)}
        />
      </Grid>
    </Grid.Container>
  );
}
