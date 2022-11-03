import React, { useState, useEffect } from "react";
import { Container, Row, Col, Grid } from "@nextui-org/react";
import NewTweet from "./NewTweet";
import TweetCards from "./tweetCards";
import TweetHeader from "./TweetHeader";

export default function TwitterSection() {
  return (
    <Container display='block' gap={0}>
      <Grid.Container direction='column'>
        <TweetHeader />
        <NewTweet />
        <TweetCards />
      </Grid.Container>
    </Container>
  );
}
