import { Grid, Image, Pagination, Row } from "@nextui-org/react";

export default function TweetImgs(props) {
  const tweetImg = props.tweetImg;
  if (tweetImg.length === 0) {
    return "";
  }
  const result = tweetImg.map((image) => {
    return <Image key={image} src={image} alt="tweet-content-img" />;
  });
  return <Grid>{result}</Grid>;
}
