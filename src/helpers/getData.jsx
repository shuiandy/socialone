import { getCookie } from "cookies-next";
import axios from "axios";

function getTwitterTimeline(tweetList) {
  let timeline = [];
  const tweets = tweetList.tweets;
  const includes = tweetList.includes;
  if (tweets) {
    tweets.map((tweet) => {
      let media_url = [];
      if (tweet.entities && tweet.entities.urls) {
        tweet.entities.urls.map((url) => {
          if (url.images) {
            for (let i = 0; i < url.images.length; i += 1) {
              if (i / 2 === 0) {
                media_url.push(url.images[i].url);
              }
            }
          }
        });
      }
      includes.users.map((user) => {
        if (user.id === tweet.author_id) {
          const tweetData = {
            author_id: tweet.author_id,
            id: tweet.id,
            text: tweet.text,
            name: user.name,
            username: user.username,
            tweetImg: media_url,
            profile_image_url: user.profile_image_url,
            reply_count: tweet.public_metrics.reply_count,
            like_count: tweet.public_metrics.like_count,
            retweet_count: tweet.public_metrics.retweet_count,
            timestamp: tweet.created_at
          };
          timeline.push(tweetData);
        }
      });
    });
  }
  return timeline;
}

function getInsTimeline(insData) {
  let timeline = [];
  const accessToken = getCookie("insAccessToken");
  const posts = insData.data;
  posts.map((post) => {
    let postData = {
      media_type: post.media_type,
      text: post.caption,
      link: post.permalink,
      id: post.id,
      username: post.username,
      timestamp: post.timestamp,
    };
    if (post.media_type === "IMAGE") {
      postData["insImg"] = post.media_url;
    } else if (post.media_type === "CAROUSEL_ALBUM") {
      const album_id = [post.children.data];
      let insImgList = [];
      album_id.map((id) => {
        id.map((url) => {
          axios
            .get(
              `https://graph.instagram.com/${url.id}?fields=media_type,media_url,permalink&access_token=${accessToken}`
            )
            .then((response) => {
              insImgList.push(response.data.media_url);
            });
        });
      });
      postData["insImg"] = insImgList;
    }
    timeline.push(postData);
  });
  return timeline;
}

function getFbTimeline(fbData) {
  let timeline = [];
  fbData.map((item) => {
    if (item.message) {
      const fbPostData = {
        id: item.id,
        created_time: item.created_time,
        fbImage: item.full_picture,
        text: item.message,
      };
      timeline.push(fbPostData);
    }
  });
  return timeline;
}

module.exports = { getTwitterTimeline, getInsTimeline, getFbTimeline };
