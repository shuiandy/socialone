import { getCookie } from "cookies-next";
import axios from "axios";
export default async function GetContent(req, res) {
  const accessToken = getCookie("fbAccessToken", { req, res });
  const fbId = getCookie("fbId", { req, res });
  if (!accessToken) {
    res.status(400).send("err");
  }
  const fbTimeline = await axios.get(
    `https://graph.facebook.com/v15.0/${fbId}/feed?access_token=${accessToken}&fields=message,created_time,full_picture,comments`
  );
  res.status(200).send(fbTimeline.data);
}
