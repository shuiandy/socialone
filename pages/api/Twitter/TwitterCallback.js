import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { TwitterApi } from "twitter-api-v2";
export default function TwitterCallback(req, res) {

  const { state, code } = req.query;
  const codeVerifier = getCookie("codeVerifier", { req, res });
  const sessionState = getCookie("state", { req, res });

  if (!codeVerifier || !state || !sessionState || !code) {
    return res.status(400).send("You denied the app or your session expired!");
  }
  if (state !== sessionState) {
    return res.status(400).send("Stored tokens didn't match!");
  }
  const client = new TwitterApi({
    clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET,
  });

  client
    .loginWithOAuth2({
      code,
      codeVerifier,
      redirectUri: "https://localhost:3001/api/Twitter/TwitterCallback",
    })
    .then(
      async ({
        client: loggedClient,
        accessToken,
        refreshToken,
        expiresIn,
      }) => {
        setCookie("twitterAccessToken", accessToken, { req, res });
        deleteCookie("state", { req, res });
        deleteCookie("codeVerifier", { req, res });
      }
    )

    .then(() => {
      res.redirect("/");
    });
}
