# SocialOne

SocialOne is a SPA(Single Page Application) that allows user to view and manage their social accounts in on page.

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Latest ✔                                                                                          | Latest ✔                                                                                             | Latest ✔                                                                                          | Latest ✔                                                                                       | Latest ✔                                                                                    

## Features

- Beautiful UI
- Dark mode
- Social account log in / log out

### Twitter feature

- View your twitter home timeline
- View your twitter user timeline
- View your personal profile
- Dedicated page to show twitter user profile, user timeline and home timeline in one panel
- Retweet, untweet, like, unlike a twitter post
- Post a new tweet
- Reply a tweet

### Instagram feature

- Dedicated page to show Instagram timeline in a larger size
- View your Instagram user timeline
- Video playback
- Pagination for an Instagram album

### Facebook feature

- Dedicated page to show Facebook timeline in a larger size
- View your Facebook user timeline
- Video playback
- Pagination for an Facebook album

## Screenshots

### Main UI

![main-UI.png](doc%2Fmain-UI.png)

### Dark Mode

![Dark-mode.png](doc%2FDark-mode.png)

### Unify Stream

![unify-stream.png](doc%2Funify-stream.png)

### Twitter page

![twitter-page.png](doc%2Ftwitter-page.png)

### Instagram page

![ins-page.png](doc%2Fins-page.png)

### Facebook page

![fb-page.png](doc%2Ffb-page.png)

## Dependencies

- Axios
- Cookies-next
- Moment
- Next
- NextUI
- Next-themes
- React
- React-facebook-login
- React-icons
- React-instagram-oauth
- React-player
- React-pro-sidebar
- Recoil
- Sass
- Twitter-api-v2

## Getting Started

1. Rename .env.example to .env.local, and paste the following api tokens to the file

- twitter client id
- twitter client id secret
- twitter bearer token
- instagram client id
- instagram client secret
- facebook app id

2. Due to the policy of Meta API, you also need to deploy the project with HTTPS(if you deploy the project to the
   server) in order to get the authorization key.
   If you plan to run the project locally, you can use local-ssl-proxy to generate a self-signed certificate.
3. Install the dependencies

```bash
yarn install
```

4. Run the development server:

```bash
yarn dev
```
