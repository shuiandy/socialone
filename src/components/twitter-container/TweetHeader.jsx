import {
  Card,
  Grid,
  Text,
  Row,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { BiArrowBack, BiRefresh, BiSearch } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import { useRecoilState } from "recoil";
import useApplicationData from "../../hooks/useApplicationData";
import { twitterPanel } from "../../hooks/useRecoil";

export default function TweetHeader() {
  const [input, setInput] = useState("");
  const { fetchTwitterData, fetchTwitterSearchResult } = useApplicationData();
  const [currentPanel, setPanel] = useRecoilState(twitterPanel);
  const [visible, setVisible] = useState(false);
  const searchTweets = (value) => {
    fetchTwitterSearchResult(value);
    setPanel("searchResult");
    
  };
  return (
    <Grid>
      {currentPanel === "timeline" && (
        <Card>
          <Card.Body
            css={{
              p: "$6",
            }}
          >
            <Row gap={0} warp='nowarp' justify='space-between' align='center'>
              <Grid.Container>
                <BsTwitter size={25} />
              </Grid.Container>
              <Grid.Container justify='center'>
                <Grid>
                  <Text h4 size={20} css={{ m: 0 }}>
                    My Tweets
                  </Text>
                </Grid>
              </Grid.Container>
              <Grid.Container justify='flex-end' display='inline-flex'>
                <Grid
                  css={{
                    "&:hover": {
                      opacity: 0.8,
                      borderRadius: "40px",
                    },
                    "&:active": {
                      opacity: 0.2,
                    },
                  }}
                >
                  <BiRefresh size={25} onClick={fetchTwitterData} />
                </Grid>
                <Grid
                  css={{
                    "&:hover": {
                      opacity: 0.8,
                      borderRadius: "40px",
                    },
                    "&:active": {
                      opacity: 0.2,
                    },
                  }}
                >
                  <BiSearch
                    size={25}
                    onClick={() =>
                      visible ? setVisible(false) : setVisible(true)
                    }
                  />
                </Grid>
              </Grid.Container>
            </Row>
            {visible && (
              <Row>
                <Grid.Container css={{ paddingTop: "15px" }}>
                  <Grid css={{ width: "100%" }}>
                    <Input
                      width='100%'
                      placeholder='Search tweets'
                      value={input}
                      onInput={(e) => setInput(e.target.value)}
                      contentRight={
                        <Button size={15} onPress={() => searchTweets(input)}>
                          Search
                        </Button>
                      }
                    />
                  </Grid>
                </Grid.Container>
              </Row>
            )}
          </Card.Body>
        </Card>
      )}
      {currentPanel === "searchResult" && (
        <Card>
          <Card.Body
            css={{
              p: "$6",
            }}
          >
            <Row gap={0} warp='nowarp' justify='space-between' align='center'>
              <Grid.Container>
                <BiArrowBack size={25} onClick={()=>setPanel("timeline")} />
              </Grid.Container>
              <Grid.Container justify='center'>
                <Grid>
                  <Text h4 size={20} css={{ m: 0 }}>
                    Search Results
                  </Text>
                </Grid>
              </Grid.Container>
              <Grid.Container
                justify='flex-end'
                display='inline-flex'
              ></Grid.Container>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Grid>
  );
}
