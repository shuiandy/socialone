import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import reducer from "../reducers/application";
import {
  getInsTimeline,
  getTwitterTimeline,
  getFbTimeline,
} from "../helpers/getData";
import { fbLoginStatus, insLoginStatus, twitterLoginStatus } from "./useRecoil";
import { useRecoilState } from "recoil";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    insPosts: [],
    facebookPosts: [],
    twitterPosts: [],
    twitterUserInfo: [],
    twitterUserTimeline: [],
  });

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
      dispatch({
        type: "SET_TWITTER_USER_TIMELINE",
        twitterUserTimeline: finalData.timeline,
      });
    });
  };
  const fetchInsData = () => {
    console.log("I'm Here");
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
