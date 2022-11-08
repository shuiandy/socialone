import axios from "axios";
import { getCookie } from "cookies-next";
export default async function GetContent(req, res) {
  const accessToken = getCookie("insAccessToken", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const userId = getCookie("insUserId", { req, res });
  const data = await axios.get(
    `https://graph.instagram.com/v15.0/${userId}/media?fields=caption,media_type,media_url,timestamp,children,permalink,username&access_token=${accessToken}`
  );
  res.status(200).send(data.data);
}
