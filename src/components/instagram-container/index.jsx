import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";
import InsCards from "./InsCards";
import InsHeader from "./InsHeader";
import InstagramLogin from "react-instagram-oauth";
import { setCookie } from "cookies-next";
import { insLoginStatus, loadingStateIns } from "../../hooks/useRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import LoadingState from "../LoadingState";
export default function InsSection(props) {
  const [loginStatus, setInsLogin] = useRecoilState(insLoginStatus);
  const isLoading = useRecoilValue(loadingStateIns);
  const authHandler = (err, data) => {
    setCookie("insAccessToken", data.access_token);
    setCookie("insUserId", data.user_id);
    setInsLogin(true);
  };
  const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID;
  const appSecret = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET;
  return (
    <Container display='block' gap={0}>
      {isLoading && <LoadingState />}
      {!loginStatus && (
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text b h3>
              Instagram Login
            </Text>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src='ins-bg.jpg'
              width='100%'
              height='100%'
              objectFit='cover'
              alt='Ins-bg'
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row justify='center'>
              <InstagramLogin
                authCallback={authHandler}
                appId={clientId}
                appSecret={appSecret}
                scopes={"user_media,user_profile"}
                redirectUri='https://localhost:3001/'
              />
            </Row>
          </Card.Footer>
        </Card>
      )}
      {loginStatus && !isLoading && (
        <Grid.Container direction='column'>
          <InsHeader />
          <InsCards insPosts={props.insPosts} />
        </Grid.Container>
      )}
    </Container>
  );
}
