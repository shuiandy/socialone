import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { TwitterApi } from "twitter-api-v2";
export default function TwitterCallback(req, res) {
  const { oauth_token, oauth_verifier } = req.query;
  const oauth_token_secret = getCookie("oauth_token_secret", { req, res });
  if (!oauth_token || !oauth_verifier || !oauth_token_secret) {
    return res.status(400).send("You denied the app or your session expired!");
  }
  const client = new TwitterApi({
    appKey: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
    appSecret: process.env.NEXT_PUBLIC_TWITTER_API_SECRET,
    accessToken: oauth_token,
    accessSecret: oauth_token_secret,
  });

  client
    .login(oauth_verifier)
    .then(({ userId, client: loggedClient, accessToken, accessSecret }) => {
      // loggedClient is an authenticated client in behalf of some user
      // Store accessToken & accessSecret somewhere
      setCookie("twitterId", userId, { req, res });
      setCookie("twitterAccessToken", accessToken, { req, res });
      setCookie("twitterAccessSecret", accessSecret, { req, res });
      deleteCookie("oauth_token", { req, res });
      deleteCookie("oauth_token_secret", { req, res });
    })
    .then(() => {
      res.redirect("/");
    });
}
