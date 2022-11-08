import { Card, Grid, Text, Image, Row, Modal } from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import axios from "axios";
import TweetImgs from "./TweetImgs";
import { useState } from "react";
import moment from "moment";
export default function TweetCardItem(props) {
  const [rtState, setRtState] = useState(false);
  const [likeState, setLikeState] = useState(false);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  function likeTweet() {
    const likeAction = axios.get(
      `/api/Twitter/actions?method=like&id=${props.id}`
    );
    if (likeAction) {
      setLikeState(true);
    }
  }
  function unlikeTweet() {
    const likeAction = axios.get(
      `/api/Twitter/actions?method=unlike&id=${props.id}`
    );
    if (likeAction) {
      setLikeState(false);
    }
  }
  function rtTweet() {
    const rtAction = axios.get(
      `/api/Twitter/actions?method=retweet&id=${props.id}`
    );
    if (rtAction) {
      setRtState(true);
    }
  }
  function cancelRt() {
    const rtAction = axios.get(
      `/api/Twitter/actions?method=unretweet&id=${props.id}`
    );
    if (rtAction) {
      setRtState(false);
    }
  }

  const time = moment(props.timestamp).fromNow();
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Card
      allowTextSelectionOnPress
      isHoverable
      css={{ p: "$6", mw: "100%", marginTop: "15px" }}
    >
      <Card.Header justify='center'>
        <Image
          alt='profile-image'
          src={props.profileImg}
          width='40px'
          height='40px'
        />
        <Grid.Container alignContent='center' css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Row>
            <Text h5 css={{ lineHeight: "$xs" }}>
              {props.name}
              </Text>
              <Text h6 css={{ lineHeight: "xs", paddingLeft: "10px", justifyContent: "flex-end" }}>
                @{props.username}
              </Text>
            </Row>
          </Grid>
          <Grid xs={12}>
            <Text h6 css={{ lineHeight: "$xs" }}>
              {time}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Grid.Container>
          <Grid>
            <Text>{props.text}</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container>
          <TweetImgs tweetImg={props.tweetImg} key={props.id} />
        </Grid.Container>
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={2} justify='space-between'>
          <Grid
            onClick={handler}
            direction='row'
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <Row align='center'>
              <Grid.Container>
                <Grid css={{ paddingRight: "5px", marginTop: "2px" }}>
                  <MdChatBubbleOutline size={25} />
                </Grid>
                <Grid>
                  {props.replyCount > 0 && <Text> {props.replyCount}</Text>}
                </Grid>
              </Grid.Container>
            </Row>
          </Grid>
          <Grid
            onClick={() => (rtState ? cancelRt() : rtTweet())}
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <Row align='center'>
              <Grid.Container>
                <Grid css={{ paddingRight: "5px", marginTop: "2px" }}>
                  <FaRetweet size={25} color={rtState ? "green" : undefined} />
                </Grid>
                <Grid>
                  {props.retweetCount > 0 && (
                    <Text>
                      {" "}
                      {rtState ? props.retweetCount + 1 : props.retweetCount}
                    </Text>
                  )}
                </Grid>
              </Grid.Container>
            </Row>
          </Grid>
          <Grid
            onClick={() => (likeState ? unlikeTweet() : likeTweet())}
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <Row align='center'>
              <Grid.Container>
                <Grid css={{ paddingRight: "5px", marginTop: "2px" }}>
                  <BiHeart size={25} color={likeState ? "green" : undefined} />
                </Grid>
                <Grid>
                  {props.likeCount > 0 && (
                    <Text>
                      {" "}
                      {likeState ? props.likeCount + 1 : props.likeCount}
                    </Text>
                  )}
                </Grid>
              </Grid.Container>
            </Row>
          </Grid>
        </Grid.Container>
      </Card.Footer>
      <Modal closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Tweet Detail
          </Text>
        </Modal.Header>
      </Modal>
    </Card>
  );
}
