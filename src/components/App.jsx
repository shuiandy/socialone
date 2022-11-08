import AppSidebar from "./global/AppSidebar";
import AppNavbar from "./global/AppNavbar";
import TwitterSection from "./twitter-container";
import { Col, Container, Grid, Row } from "@nextui-org/react";
import InsSection from "./instagram-container";
import PreferencesModal from "./global/PreferencesModal";
import FbSection from "./facebook-container";
import useApplicationData from "../hooks/useApplicationData";
import { useRecoilValue } from "recoil";
import { modeState } from "../hooks/useRecoil";

function App() {
  const { state } = useApplicationData();
  const mode = useRecoilValue(modeState);
  return (
    <div className='app'>
      <AppSidebar />
      <main className='content'>
        <AppNavbar />
        <Container css={{ margin: 0, padding: 0 }}>
          {mode === "unify" && (
            <Row>
              <Col gap={0} css={{ padding: "16px" }}>
                <TwitterSection twitterData={state.twitterPosts} />
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
              <Grid>
                <TwitterSection twitterData={state.twitterPosts} />
              </Grid>
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
