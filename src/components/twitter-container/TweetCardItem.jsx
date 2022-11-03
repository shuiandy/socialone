import { Card, Grid, Text, Image } from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import TweetContextModal from "./TweetContextModal";

export default function TweetCardItem(props) {
  return (
    <Card
      isHoverable='true'
      isPressable='true'
      // onPress={(e) => <TweetContextModal />}
      css={{ p: "$6", mw: "100%" }}
    >
      <Card.Header justify='center'>
        <img
          alt='nextui logo'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width='34px'
          height='34px'
        />
        <Grid.Container alignContent='center' css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text h5 css={{ lineHeight: "$xs" }}>
              @shuiandy
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
        <Image src='https://pbs.twimg.com/media/Fgjzx02UUAAp07K?format=jpg&name=medium'></Image>
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={2} justify='space-between'>
          <Grid
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <MdChatBubbleOutline size={25} />
          </Grid>
          <Grid
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <FaRetweet size={25} />
          </Grid>
          <Grid
            css={{
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
                borderRadius: "40px",
              },
            }}
          >
            <BiHeart size={25} />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
