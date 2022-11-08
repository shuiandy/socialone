import { Container, Grid, Row, Card, Text } from "@nextui-org/react";
import React from "react";
import FbCards from "./FbCards";
import FbHeader from "./FbHeader";
import FacebookLogin from "react-facebook-login";
import { setCookies } from "cookies-next";
import { fbLoginStatus } from "../../hooks/useRecoil";
import { useRecoilState } from "recoil";

export default function FbSection(props) {
  const [loginStatus, setFbLogin] = useRecoilState(fbLoginStatus);
  const responseFb = (response) => {
    setCookies("fbAccessToken", response.accessToken);
    setCookies("fbId", response.id);
    setFbLogin(true);
  };
  return (
    <Container display='block' gap={0}>
      {!loginStatus && (
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text b h3>
              Facebook Login
            </Text>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src='fb-bg.webp'
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
              height: "80px",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row justify='center'>
              <FacebookLogin
                appId='2243650315964178'
                autoLoad={false}
                callback={responseFb}
                cssClass='facebook-Button'
                size='small'
                textButton='Log in with Facebook'
              />
            </Row>
          </Card.Footer>
        </Card>
      )}
      {loginStatus && (
        <Grid.Container direction='column'>
          <FbHeader />
          <FbCards fbPosts={props.fbPosts} loginStatus={props.loginStatus} />
        </Grid.Container>
      )}
    </Container>
  );
}
