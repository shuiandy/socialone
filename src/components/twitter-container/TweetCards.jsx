import { Grid } from "@nextui-org/react";
import TweetCardItem from "./TweetCardItem";

export default function TweetCards(props) {
  const tweet = props.tweets;
  const result = tweet.map((item) => {
    return (
      <TweetCardItem
        key={item.id}
        id={item.id}
        username={item.username}
        profileImg={item.profile_image_url}
        author_id={item.author_id}
        replyCount={item.reply_count}
        retweetCount={item.retweet_count}
        likeCount={item.like_count}
        text={item.text}
        name={item.name}
        tweetImg={item.tweetImg}
        timestamp={item.timestamp}
      />
    );
  });
  return <Grid>{result}</Grid>;
}
