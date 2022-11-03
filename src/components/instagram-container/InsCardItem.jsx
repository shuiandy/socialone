import { Card, Grid, Text, Row, Image } from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
export default function InsCardItem() {
  return (
    <Card>
      <Card.Header>
        <image
          alt='nextui logo'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width='34px'
          height='34px'
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              shuiandy
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text h5 css={{ lineHeight: "$xs" }}>
              Nov 2, 2022
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Image src="https://pbs.twimg.com/media/FgYkHXVXwAARWyM?format=jpg&name=medium" />
      </Card.Body>
      <Card.Divider />
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
