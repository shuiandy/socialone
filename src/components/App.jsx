import AppSidebar from "./global/AppSidebar";
import AppNavbar from "./global/AppNavbar";
import TwitterSection from "./twitter-container";
import { Col, Container, Grid, Row } from "@nextui-org/react";
import InsSection from "./instagram-container";
import PreferencesModal from "./global/PreferencesModal";
import FbSection from "./facebook-container";
import useApplicationData from "../hooks/useApplicationData";
import { useRecoilValue } from "recoil";
import { modeState, twitterLoginStatus } from "../hooks/useRecoil";
import TwitterUserInfo from "./twitter-container/TwitterUserInfo";

function App() {
  const { state } = useApplicationData();
  const { loginStatus } = useRecoilValue(twitterLoginStatus);
  const mode = useRecoilValue(modeState);
  return (
    <div className='app'>
      <AppSidebar />
      <main className='content'>
        <AppNavbar />
        <Container
          css={{
            margin: 0,
            padding: 0,
            overflowY: "scroll",
            maxHeight: "100vh",
          }}
        >
          {mode === "unify" && (
            <Row>
              <Col gap={0} css={{ padding: "16px" }}>
                <TwitterSection
                  twitterData={state.twitterPosts}
                  twitterUserInfo={state.twitterUserInfo}
                />
              </Col>
              <Col gap={0} css={{ padding: "16px" }}>
                <InsSection insPosts={state.insPosts} />
              </Col>
              <Col gap={0} css={{ padding: "16px" }}>
                <FbSection fbPosts={state.facebookPosts} />
              </Col>
            </Row>
          )}
          {mode === "facebook" && (
            <Grid.Container justify='center' css={{ paddingTop: "20px" }}>
              <Grid>
                <FbSection fbPosts={state.facebookPosts} />
              </Grid>
            </Grid.Container>
          )}
          {mode === "twitter" && (
            <Grid.Container justify='center' css={{ paddingTop: "20px" }}>
              <Row>
                <Col gap={0} css={{ padding: "16px" }}>
                  <Grid>
                    <TwitterSection
                      twitterData={state.twitterPosts}
                      twitterUserInfo={state.twitterUserInfo}
                    />
                  </Grid>
                </Col>
                {loginStatus && (
                  <Col gap={0} css={{ padding: "16px" }}>
                    <Grid>
                      <TwitterUserInfo
                        twitterUserInfo={state.twitterUserInfo}
                        twitterUserTimeline={state.twitterUserTimeline}
                      />
                    </Grid>
                  </Col>
                )}
              </Row>
            </Grid.Container>
          )}
          {mode === "instagram" && (
            <Grid.Container justify='center' css={{ paddingTop: "20px" }}>
              <Grid>
                <InsSection insPosts={state.insPosts} />
              </Grid>
            </Grid.Container>
          )}
          <PreferencesModal />
        </Container>
      </main>
    </div>
  );
}

export default App;
