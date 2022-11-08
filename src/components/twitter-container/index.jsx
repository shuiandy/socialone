import React, { useState } from "react";
import { Container, Row, Grid, Button, Text, Card } from "@nextui-org/react";
import NewTweet from "./NewTweet";
import TweetCards from "./tweetCards";
import TweetHeader from "./TweetHeader";
import { BsTwitter } from "react-icons/bs";
import { twitterLoginStatus } from "../../hooks/useRecoil";
import { useRecoilValue } from "recoil";
export default function TwitterSection(props) {
  const loginStatus = useRecoilValue(twitterLoginStatus);
  const twitterData = props.twitterData;
  return (
    <Container display='block' gap={0}>
      {!loginStatus && (
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text b h3>
              Twitter Login
            </Text>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src='twitter-bg.png'
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
              <Button
                auto
                size='lg'
                color='gradient'
                icon={<BsTwitter />}
                onPress={() => (location.href = "/api/Twitter/TwitterLogin")}
              >
                Log in with Twitter
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      )}
      {loginStatus && (
        <Grid.Container direction='column'>
          <TweetHeader />
          <NewTweet />
          <TweetCards tweets={twitterData} />
        </Grid.Container>
      )}
    </Container>
  );
}
