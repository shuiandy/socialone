import { useEffect, useReducer } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import reducer from "../reducers/application";
import {
  getInsTimeline,
  getTwitterTimeline,
  getFbTimeline,
} from "../helpers/getData";
import {
  fbLoginStatus,
  insLoginStatus,
  twitterLoginStatus,
  twitterUserTimeline,
  twitterSearchResult,
  twitterPanel,
  loadingStateTwitter,
  loadingStateFb,
  loadingStateIns,
} from "./useRecoil";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    insPosts: [],
    facebookPosts: [],
    twitterPosts: [],
    twitterUserInfo: [],
  });
  const setTwitterUserTimeline = useSetRecoilState(twitterUserTimeline);
  const setTwitterSearchResult = useSetRecoilState(twitterSearchResult);
  const [currentPanel, setPanel] = useRecoilState(twitterPanel);
  const [fbLogin, setFbLogin] = useRecoilState(fbLoginStatus);
  const [insLogin, setInsLogin] = useRecoilState(insLoginStatus);
  const [twitterLogin, setTwitterLogin] = useRecoilState(twitterLoginStatus);
  const setTwitterLoadingState = useSetRecoilState(loadingStateTwitter);
  const setFbLoadingState = useSetRecoilState(loadingStateFb);
  const setInsLoadingState = useSetRecoilState(loadingStateIns);
  const fetchTwitterSearchResult = (searchString) => {
    setTwitterLoadingState(true);
    console.log("fetchTwitter");
    axios
      .get(`/api/Twitter/actions?method=search&searchString=${searchString}`)
      .then((response) => {
        const finalData = getTwitterTimeline(response.data);
        setTwitterSearchResult(finalData);
        setTwitterLoadingState(false);
        setPanel("searchResult");
      });
  };
  const reloadTweetList = () => {
    setTwitterLoadingState(true);
    console.log("here");
    axios.get("/api/Twitter/GetContent").then((response) => {
      const finalData = getTwitterTimeline(response.data);
      dispatch({
        type: "SET_TWITTER_DATA",
        twitterPosts: finalData.timeline,
        twitterUserInfo: finalData.userInfo,
      });
    });
    setTwitterLoadingState(false);
  };
  const submitNewTweet = (tweet) => {
    setTwitterLoadingState(true);
    axios.get(`/api/Twitter/actions?method=newtweet&tweet=${tweet}`);
    reloadTweetList();
    fetchTwitterUserTimeline();
  };
  const replyTweet = (tweet) => {
    setTwitterLoadingState(true);
    axios
      .get(`/api/Twitter/actions?method=reply&tweet=${tweet}`)
      .then(() => {});
    reloadTweetList();
    fetchTwitterUserTimeline();
  };
  const fetchTwitterUserTimeline = () => {
    setTwitterLoadingState(true);
    axios.get("/api/Twitter/GetUserContent").then((response) => {
      const finalData = getTwitterTimeline(response.data);
      setTwitterUserTimeline(finalData.userTimeline);
    });
    setTwitterLoadingState(false);
  };
  useEffect(() => {
    const twitterLoginCookie = getCookie("twitterAccessToken");
    console.log("useTwitterEffect");
    if (twitterLoginCookie) {
      setTwitterLogin(true);
      setTwitterLoadingState(true);
      axios.get("/api/Twitter/GetContent").then((response) => {
        const finalData = getTwitterTimeline(response.data);
        dispatch({
          type: "SET_TWITTER_DATA",
          twitterPosts: finalData.timeline,
          twitterUserInfo: finalData.userInfo,
        });
      });
      setTwitterLoadingState(false);
    }
  }, [setTwitterLoadingState, setTwitterLogin]);
  useEffect(() => {
    const fbLoginCookie = getCookie("fbAccessToken");
    if (fbLoginCookie || fbLogin) {
      setFbLogin(true);
      setFbLoadingState(true);
      axios.get("/api/Facebook/GetContent").then((response) => {
        console.log("fbLog")
        const finalData = getFbTimeline(response.data.data);
        dispatch({
          type: "SET_FB_DATA",
          facebookPosts: finalData,
        });
      });
      setFbLoadingState(false);
    }
  }, [fbLogin, setFbLoadingState, setFbLogin]);
  useEffect(() => {
    const insLoginCookie = getCookie("insAccessToken");
    if (insLogin || insLoginCookie) {
      setInsLogin(true);
      setInsLoadingState(true);

      axios.get("/api/Instagram/GetContent").then((response) => {
        const finalData = getInsTimeline(response.data);
        dispatch({
          type: "SET_INS_DATA",
          insPosts: finalData,
        });
      });
      setInsLoadingState(false);
    }
  }, [insLogin, setInsLoadingState, setInsLogin]);

  return {
    state,
    fetchTwitterUserTimeline,
    fetchTwitterSearchResult,
    submitNewTweet,
    replyTweet,
  };
}
