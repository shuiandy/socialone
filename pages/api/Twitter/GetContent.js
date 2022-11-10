import { getCookie } from "cookies-next";
import { TwitterApi, TwitterV2IncludesHelper } from "twitter-api-v2";
export default async function GetContent(req, res) {
  const accessToken = getCookie("twitterAccessToken", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const client = new TwitterApi(accessToken);
  const userId = await client.v2.me();
  const homeTimeline = await client.v2.homeTimeline({
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
  const userInfo = await client.v2.user(userId.data.id, {
    "user.fields": [
      "entities",
      "id",
      "location",
      "public_metrics",
      "username",
      "description",
      "profile_image_url",
      "created_at",
    ],
  });

  res.status(200).send({
    tweets: homeTimeline.tweets,
    includes: homeTimeline.includes.result.includes,
    userInfo: userInfo.data,
  });
}
