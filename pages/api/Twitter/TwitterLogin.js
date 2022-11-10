import { setCookie } from "cookies-next";
import { TwitterApi } from "twitter-api-v2";
async function TwitterLogin(req, res) {
  const appURL = process.env.NEXT_PUBLIC_APPURL;
  // Create a partial client for auth links
  const client = new TwitterApi({
    clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET,
  });
  const authLink = await client.generateOAuth2AuthLink(
    `${appURL}/api/Twitter/TwitterCallback`,
    {
      scope: [
        "tweet.read",
        "users.read",
        "like.write",
        "like.read",
        "tweet.read",
        "tweet.write",
        "users.read",
        "offline.access",
      ],
    }
  );

  setCookie("state", authLink.state, { req, res });
  setCookie("codeVerifier", authLink.codeVerifier, { req, res });
  res.redirect(authLink.url);
}
export default TwitterLogin;
