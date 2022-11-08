import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";
import InsCards from "./InsCards";
import InsHeader from "./InsHeader";
import InstagramLogin from "react-instagram-oauth";
import { setCookie } from "cookies-next";
import { insLoginStatus } from "../../hooks/useRecoil";
import { useRecoilState } from "recoil";

export default function InsSection(props) {
  const [loginStatus, setInsLogin] = useRecoilState(insLoginStatus);
  const authHandler = (err, data) => {
    setInsLogin(true);
    setCookie("insAccessToken", data.access_token);
    setCookie("insUserId", data.user_id);
  };
  const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID;
  const appSecret = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET;
  return (
    <Container display='block' gap={0}>
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
            <Row justify="center">
              <InstagramLogin
                authCallback={authHandler}
                appId={clientId}
                appSecret={appSecret}
                redirectUri='https://localhost:3001/'
              />
            </Row>
          </Card.Footer>
        </Card>
      )}
      {loginStatus && (
        <Grid.Container direction='column'>
          <InsHeader />
          <InsCards insPosts={props.insPosts} loginStatus={props.loginStatus} />
        </Grid.Container>
      )}
    </Container>
  );
}
