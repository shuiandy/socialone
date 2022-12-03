import { useEffect, useReducer } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import reducer from "../reducers/application";
import {
  getFbTimeline,
  getInsTimeline,
  getTwitterTimeline,
} from "../helpers/getData";
import {
  fbLoginStatus,
  insLoginStatus,
  loadingStateFb,
  loadingStateIns,
  loadingStateTwitter,
  twitterLoginStatus,
  twitterPanel,
  twitterSearchResult,
  twitterUserTimeline,
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
  const setPanel = useSetRecoilState(twitterPanel);
  const [fbLogin, setFbLogin] = useRecoilState(fbLoginStatus);
  const [insLogin, setInsLogin] = useRecoilState(insLoginStatus);
  const [twitterLogin, setTwitterLogin] = useRecoilState(twitterLoginStatus);
  const setTwitterLoadingState = useSetRecoilState(loadingStateTwitter);
  const setFbLoadingState = useSetRecoilState(loadingStateFb);
  const setInsLoadingState = useSetRecoilState(loadingStateIns);

  const twitterLoginCookie = getCookie("twitterAccessToken");
  const fbLoginCookie = getCookie("fbAccessToken");
  const insLoginCookie = getCookie("insAccessToken");

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
  const submitNewTweet = (tweet) => {
    // setTwitterLoadingState(true);
    axios.get(`/api/Twitter/actions?method=newtweet&tweet=${tweet}`);
  };

  const replyTweet = (tweet) => {
    axios.get(`/api/Twitter/actions?method=reply&tweet=${tweet}`);
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
    if (!twitterLogin && twitterLoginCookie) {
      setTwitterLogin(true);
    }
    const fetchTwitterData = () => {
      setTwitterLoadingState(true);
      axios.get("/api/Twitter/GetContent").then((response) => {
        console.log("useTwitterEffect");
        const finalData = getTwitterTimeline(response.data);
        dispatch({
          type: "SET_TWITTER_DATA",
          twitterPosts: finalData.timeline,
          twitterUserInfo: finalData.userInfo,
        });
      });
      setTwitterLoadingState(false);
    };
    if (!twitterLogin) return;
    fetchTwitterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitterLogin]);

  useEffect(() => {
    if (!fbLogin && fbLoginCookie) {
      setFbLogin(true);
    }
    const fetchFBData = () => {
      setFbLoadingState(true);
      axios.get("/api/Facebook/GetContent").then((response) => {
        const finalData = getFbTimeline(response.data.data);
        console.log("FBFB");
        dispatch({
          type: "SET_FB_DATA",
          facebookPosts: finalData,
        });
        setFbLoadingState(false);
      });
    };
    if (!fbLogin) return;
    fetchFBData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fbLogin]);
  useEffect(() => {
    if (!insLogin && insLoginCookie) {
      setInsLogin(true);
    }
    const fetchInsData = () => {
      setInsLoadingState(true);
      axios.get("/api/Instagram/GetContent").then((response) => {
        const finalData = getInsTimeline(response.data);
        console.log("InsIns");
        dispatch({
          type: "SET_INS_DATA",
          insPosts: finalData,
        });
      });
      setInsLoadingState(false);
    };
    if (!insLogin) return;
    fetchInsData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insLogin]);

  return {
    state,
    fetchTwitterUserTimeline,
    fetchTwitterSearchResult,
    submitNewTweet,
    replyTweet,
  };
}
