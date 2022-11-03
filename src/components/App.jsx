import AppSidebar from "./global/AppSidebar";
import AppNavbar from "./global/AppNavbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { getTweets } from "../api/twitter/getTweets";
import TwitterSection from "./twitter-container";
import { Col, Container, Grid, Row } from "@nextui-org/react";
import InsSection from "./instagram-container";
import PreferencesModal from "./global/PreferencesModal";
import FbSection from "./facebook-container";

function App() {
  return (
    <div className='app'>
      <AppSidebar />
      <main className='content'>
        <AppNavbar />
        <Container css={{ margin: 0, padding: 0 }}>
          <Row>
            <Col gap={0} css={{ padding: "16px" }}>
              <TwitterSection />
            </Col>
            <Col gap={0} css={{ padding: "16px" }}>
              <InsSection />
            </Col>
            <Col gap={0} css={{padding: "16px"}}>
              <FbSection />
            </Col>
          </Row>
          <PreferencesModal />
        </Container>
      </main>
    </div>
  );
}

export default App;
