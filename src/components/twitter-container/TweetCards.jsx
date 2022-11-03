import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import TweetCardItem from "./TweetCardItem";

export default function TweetCards(props) {
  // const tweet = props.tweets
  // const result = tweet.map((item) => (
  //   <TweetCardItem key={item.id} list={item.list} />
  // ));

  // return <row>{result};</row>;
  return (
    <Grid css={{paddingBottom: "15px"}}>
      <TweetCardItem />
    </Grid>
  );
}
