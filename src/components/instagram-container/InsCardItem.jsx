import { Card, Grid, Image, Link, Popover, Text, Row } from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import ReactPlayer from "react-player";
import { MdChatBubbleOutline } from "react-icons/md";
import moment from "moment";
import InsShowAlbum from "./InsShowAlbum";

export default function InsCardItem(props) {
  const time = moment(props.timestamp).fromNow();
  return (
    <Card
      allowTextSelectionOnPress
      isHoverable
      css={{ p: "$6", mw: "100%", marginBottom: "15px" }}
    >
      <Card.Header>
        <BsInstagram size={25} />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.username}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text h5 css={{ lineHeight: "$xs" }}>
              {time}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Text>{props.text}</Text>
        {props.media === "IMAGE" && <Image src={props.insImg} alt='ins-img' />}
        {props.media === "CAROUSEL_ALBUM" && (
          <InsShowAlbum insImg={props.insImg} />
        )}
        {props.media === "VIDEO" && (
          <Grid>
            <ReactPlayer
              width="100%"
              controls
              muted
              playing
              loop
              url={props.insImg}
            />
          </Grid>
        )}
        <Row>
          <Text h6>
            <Link href={props.link} target='_blank'>
              Open in Instagram
            </Link>{" "}
            to likes and post comments.
          </Text>
        </Row>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Grid.Container gap={2} justify='space-between'>
          <Popover>
            <Popover.Trigger>
              <Grid
                css={{
                  "&:hover": {
                    background: "$pink100",
                    color: "$pink800",
                    borderRadius: "40px",
                  },
                }}
              >
                <MdChatBubbleOutline size={25} as='Button' />
              </Grid>
            </Popover.Trigger>
            <Popover.Content>
              <Text b size={25} css={{ px: "$10", py: "$6" }}>
                Where are Likes and Comments?
              </Text>
              <Text css={{ px: "$10", py: "$3" }}>
                Instagram has reduced functionality for managing personal
                profiles in tools. <br />
                To view and reply to comments from SocialOne, switch to
                Instagram Business.
              </Text>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger>
              <Grid
                css={{
                  "&:hover": {
                    background: "$pink100",
                    color: "$pink800",
                    borderRadius: "40px",
                  },
                }}
              >
                <FaRetweet size={25} as='Button' />
              </Grid>
            </Popover.Trigger>
            <Popover.Content>
              <Text b size={25} css={{ px: "$10", py: "$6" }}>
                Where are Likes and Comments?
              </Text>
              <Text css={{ px: "$10", py: "$3" }}>
                Instagram has reduced functionality for managing personal
                profiles in tools. <br />
                To view and reply to comments from SocialOne, switch to
                Instagram Business.
              </Text>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger>
              <Grid
                css={{
                  "&:hover": {
                    background: "$pink100",
                    color: "$pink800",
                    borderRadius: "40px",
                  },
                }}
              >
                <BiHeart size={25} as='Button' />
              </Grid>
            </Popover.Trigger>
            <Popover.Content>
              <Text b size={25} css={{ px: "$10", py: "$6" }}>
                Where are Likes and Comments?
              </Text>
              <Text css={{ px: "$10", py: "$3" }}>
                Instagram has reduced functionality for managing personal
                profiles in tools. <br />
                To view and reply to comments from SocialOne, switch to
                Instagram Business.
              </Text>
            </Popover.Content>
          </Popover>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
