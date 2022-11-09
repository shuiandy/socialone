import { TwitterApi } from "twitter-api-v2";
import { getCookie } from "cookies-next";
export default async function action(req, res) {
  const loggedUserId = getCookie("twitterId", { req, res });
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
  const method = req.query.method;
  const id = req.query.id;
  console.log(req.query);
  if (method === "like") {
    const sendLike = await client.v2.like(loggedUserId, id);
    console.log(sendLike);
    if (sendLike && sendLike.data.liked) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "unlike") {
    const sendLike = await client.v2.unlike(loggedUserId, id);
    console.log(sendLike);
    if (sendLike && !sendLike.data.liked) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "retweet") {
    const sendRT = await client.v2.retweet(loggedUserId, id);
    console.log(sendRT);
    if (sendRT && sendRT.data.retweeted) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "unretweet") {
    const sendRT = await client.v2.unretweet(loggedUserId, id);
    console.log(sendRT);
    if (sendRT && !sendRT.data.retweeted) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "search") {
    const searchResult = await client.v2.search(req.query.text, {
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
    return res.status(200).send({
      tweetSearchResult: searchResult,
    });
  }
}
