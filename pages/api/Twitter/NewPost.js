import { getCookie } from "cookies-next";
import { TwitterApi} from "twitter-api-v2";
export default async function GetContent(req, res) {
  const accessToken = getCookie("twitterAccessToken", { req, res });
  const accessSecret = getCookie("twitterAccessSecret", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const client = new TwitterApi({
    accessToken: accessToken,
    accessSecret: accessSecret,
    appKey: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
    appSecret: process.env.NEXT_PUBLIC_TWITTER_API_SECRET,
  });
  const newTweet = await client.v2.tweet(req.query.tweet);
  console.log(newTweet);
  res.status(200).send("success");
}
