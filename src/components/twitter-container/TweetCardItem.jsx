import {
  Card,
  Grid,
  Text,
  Image,
  Row,
  Modal,
  Input,
  Button,
} from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import axios from "axios";
import TweetImgs from "./TweetImgs";
import { useState } from "react";
import moment from "moment";
export default function TweetCardItem(props) {
  const [rtState, setRtState] = useState(false);
  const [replyState, setReplyState] = useState(false);
  const [likeState, setLikeState] = useState(false);
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const handler = () => setVisible(true);
  const profileImg = props.profileImg.replace("_normal", "_bigger");
  const setReplyTweet = (tweet) => {
    const setReply = axios.get(
      `/api/Twitter/actions?method=reply&id=${props.id}&tweet=${tweet}`
    );
    if (setReply) {
      setReplyState(true);
      setInput("");
      setVisible(false);
    }
  };
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
        <Grid>
          <Image
            alt='profile-image'
            src={profileImg}
            height='40px'
            css={{ borderRadius: "50%" }}
          />
        </Grid>
        <Grid.Container alignContent='center' css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Row>
              <Text h5 css={{ lineHeight: "$xs" }}>
                {props.name}
              </Text>
              <Text
                h6
                css={{
                  lineHeight: "xs",
                  paddingLeft: "10px",
                  justifyContent: "flex-end",
                }}
              >
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
      <Card.Body>
        <Text>{props.text}</Text>
        <TweetImgs tweetImg={props.tweetImg} key={props.id} />
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
                  <Text> {replyState ? props.replyCount + 1 : props.replyCount}</Text>
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
            Reply this tweet
          </Text>
        </Modal.Header>
        <Input
          size='lg'
          aria-label='reply-tweet'
          placeholder='Say something...'
          name='reply-tweet'
          css={{ width: "100%" }}
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Modal.Footer css={{ justifyContent: "flex-end" }}>
          <Button auto type='submit' onPress={() => setReplyTweet(input)}>
            Tweet
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
