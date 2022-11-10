import { TwitterApi } from "twitter-api-v2";
import { getCookie } from "cookies-next";
export default async function action(req, res) {
  const accessToken = getCookie("twitterAccessToken", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const client = new TwitterApi(accessToken);
  const method = req.query.method;
  const id = req.query.id;
  const user = await client.v2.me();
  if (method === "like") {
    const sendLike = await client.v2.like(user.data.id, id);
    console.log(sendLike);
    if (sendLike && sendLike.data.liked) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "unlike") {
    const sendLike = await client.v2.unlike(user.data.id, id);
    console.log(sendLike);
    if (sendLike && !sendLike.data.liked) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "retweet") {
    const sendRT = await client.v2.retweet(user.data.id, id);
    console.log(sendRT);
    if (sendRT && sendRT.data.retweeted) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "unretweet") {
    const sendRT = await client.v2.unretweet(user.data.id, id);
    console.log(sendRT);
    if (sendRT && !sendRT.data.retweeted) {
      return res.status(200).send(true);
    } else {
      return res.status(400).send(false);
    }
  }
  if (method === "search") {
    const searchResult = await client.v2.search(req.query.searchString, {
      expansions: ["author_id", "attachments.media_keys"],
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
      tweets: searchResult.tweets,
      includes: searchResult.includes.result.includes,
    });
  }
  if (method === "newtweet") {
    console.log(req.query);
    const { data: createdTweet } = await client.v2.tweet(req.query.tweet);
    console.log("Tweet", createdTweet.id, ":", createdTweet.text);
    return res.status(200).send(true);
  }
  if (method === "reply") {
    const { data: tweet } = await client.v2.reply(req.query.tweet, req.query.id);
    return res.status(200).send(true);
  }
}
