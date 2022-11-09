export default function reducer(state, action) {
  switch (action.type) {
    case "SET_TWITTER_DATA":
      return {
        ...state,
        twitterPosts: action.twitterPosts,
        twitterUserInfo: action.twitterUserInfo,
      };
    case "SET_FB_DATA":
      return {
        ...state,
        facebookPosts: action.facebookPosts,
      };
    case "SET_INS_DATA":
      return {
        ...state,
        insPosts: action.insPosts,
      };
    case "SET_TWITTER_USER_TIMELINE":
      return {
        ...state,
        twitterUserTimeline: action.twitterUserTimeline,
      };
  }
}
