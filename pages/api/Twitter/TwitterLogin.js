import { setCookie } from "cookies-next";
import { TwitterApi } from "twitter-api-v2";
async function TwitterLogin(req, res) {
  const appURL = process.env.NEXT_PUBLIC_APPURL;
  // Create a partial client for auth links
  const client = new TwitterApi({
    appKey: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
    appSecret: process.env.NEXT_PUBLIC_TWITTER_API_SECRET,
  });
  const authLink = await client.generateAuthLink(
    `${appURL}/api/Twitter/TwitterCallback`
  );

  setCookie("oauth_token", authLink.oauth_token, { req, res });
  setCookie("oauth_token_secret", authLink.oauth_token_secret, { req, res });
  res.redirect(authLink.url);
}
export default TwitterLogin;
