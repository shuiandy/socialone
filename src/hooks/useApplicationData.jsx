import { useEffect, useReducer, useState } from "react";
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
  const [fbLogin, setFbLogin] = useRecoilState(fbLoginStatus);
  const [insLogin, setInsLogin] = useRecoilState(insLoginStatus);
  const [twitterLogin, setTwitterLogin] = useRecoilState(twitterLoginStatus);
  const fetchTwitterData = () => {
    axios.get("/api/Twitter/GetContent").then((response) => {
      const finalData = getTwitterTimeline(response.data);
      dispatch({
        type: "SET_TWITTER_DATA",
        twitterPosts: finalData.timeline,
        twitterUserInfo: finalData.userInfo,
      });
    });
  };
  const fetchTwitterUserTimeline = () => {
    axios.get("/api/Twitter/GetUserContent").then((response) => {
      const finalData = getTwitterTimeline(response.data);
      setTwitterUserTimeline(finalData.userTimeline);
    });
  };
  const fetchInsData = () => {
    axios.get("/api/Instagram/GetContent").then((response) => {
      const finalData = getInsTimeline(response.data);
      dispatch({
        type: "SET_INS_DATA",
        insPosts: finalData,
      });
    });
  };
  const fetchFbData = () => {
    axios.get("/api/Facebook/GetContent").then((response) => {
      const finalData = getFbTimeline(response.data.data);
      dispatch({
        type: "SET_FB_DATA",
        facebookPosts: finalData,
      });
    });
  };
  useEffect(() => {
    const twitterLoginCookie = getCookie("twitterAccessToken");
    if (twitterLoginCookie) {
      setTwitterLogin(true);
    }

    const fbLoginCookie = getCookie("fbAccessToken");
    if (fbLoginCookie) {
      setFbLogin(true);
    }
    const insLoginCookie = getCookie("insAccessToken");
    if (insLoginCookie) {
      setInsLogin(true);
    }
    if (twitterLogin) {
      fetchTwitterData();
    }
    if (insLogin) {
      fetchInsData();
    }
    if (fbLogin) {
      fetchFbData();
    }
  }, [
    twitterLogin,
    fbLogin,
    insLogin,
    setTwitterLogin,
    setFbLogin,
    setInsLogin,
  ]);

  return {
    state,
    fetchFbData,
    fetchInsData,
    fetchTwitterData,
    fetchTwitterUserTimeline,
  };
}
