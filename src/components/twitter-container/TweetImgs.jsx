import { Grid, Image, Pagination } from "@nextui-org/react";
import { useState } from "react";
export default function TweetImgs(props) {
  const images = props.tweetImg;
  const albumLen = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  if (images.length === 0) {
    return "";
  }
  return (
    <Grid.Container direction='column' gap={2}>
      <Grid xs={12}>
        <Image src={images[currentImage]} alt='album-image' />
      </Grid>
      {images.length > 1 && (
        <Grid xs={12} css={{ paddingTop: "10px", justifyContent: "center" }}>
          <Pagination
            onlyDots
            rounded
            loop
            total={albumLen}
            color='secondary'
            onChange={(currentImage) => setCurrentImage(currentImage - 1)}
          />
        </Grid>
      )}
    </Grid.Container>
  );
}
