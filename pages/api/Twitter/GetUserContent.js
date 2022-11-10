import { getCookie } from "cookies-next";
import { TwitterApi } from "twitter-api-v2";
export default async function GetUserContent(req, res) {
  const accessToken = getCookie("twitterAccessToken", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const client = new TwitterApi(accessToken);
  const user = await client.v2.me();
  const userTimeline = await client.v2.userTimeline(user.data.id, {
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
