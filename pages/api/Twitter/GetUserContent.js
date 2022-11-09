import { getCookie } from "cookies-next";
import { TwitterApi} from "twitter-api-v2";
export default async function GetUserContent(req, res) {
  const accessToken = getCookie("twitterAccessToken", { req, res });
  const accessSecret = getCookie("twitterAccessSecret", { req, res });
  const userId = getCookie("twitterId", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const client = new TwitterApi({
    accessToken: accessToken,
    accessSecret: accessSecret,
    appKey: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
    appSecret: process.env.NEXT_PUBLIC_TWITTER_API_SECRET,
  });
  const userTimeline = await client.v2.userTimeline(userId, {
    expansions: ["author_id", "attachments.media_keys"],
    exclude: ["retweets", "replies"],
    "user.fields": ["name", "profile_image_url"],
    "media.fields": ["preview_image_url", "url"],
    "tweet.fields": [
      "created_at",
      "attachments",
      "entities",
      "public_metrics",
      "conversation_id",
    ],
  });
  res.status(200).send({
    userTweets: userTimeline.tweets,
    includes: userTimeline.includes.result.includes,
  });
}
