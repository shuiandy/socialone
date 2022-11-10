import { Container, Grid, Row, Card, Text } from "@nextui-org/react";
import React from "react";
import FbCards from "./FbCards";
import FbHeader from "./FbHeader";
import FacebookLogin from "react-facebook-login";
import { setCookie } from "cookies-next";
import { fbLoginStatus, loadingStateFb } from "../../hooks/useRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import LoadingState from "../LoadingState";

export default function FbSection(props) {
  const [loginStatus, setFbLogin] = useRecoilState(fbLoginStatus);
  const isLoading = useRecoilValue(loadingStateFb);
  const responseFb = (response) => {
    setCookie("fbAccessToken", response.accessToken);
    setCookie("fbId", response.id);
    setFbLogin(true);
  };
  return (
    <Container display='block' gap={0}>
      {isLoading && <LoadingState />}
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
                appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                callback={responseFb}
                cssClass='facebook-Button'
                size='small'
                textButton='Log in with Facebook'
              />
            </Row>
          </Card.Footer>
        </Card>
      )}
      {loginStatus && !isLoading && (
        <Grid.Container direction='column'>
          <FbHeader />
          <FbCards fbPosts={props.fbPosts} loginStatus={loginStatus} />
        </Grid.Container>
      )}
    </Container>
  );
}
