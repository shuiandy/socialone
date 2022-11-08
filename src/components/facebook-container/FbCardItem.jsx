import { Card, Grid, Text, Row, Image } from "@nextui-org/react";
import { BiLike, BiShare } from "react-icons/bi";
import { MdChatBubbleOutline } from "react-icons/md";
import moment from "moment";
export default function FbCardItem(props) {
  const time = moment(props.timestamp).fromNow();
  return (
    <Card
      allowTextSelectionOnPress
      isHoverable
      css={{ p: "$6", mw: "100%", marginBottom: "15px" }}
    >
      <Card.Header>
        <Image
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
            <Text h6 css={{ lineHeight: "$xs" }}>
              {time}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Text>{props.text}</Text>
        {props.fbImage && <Image src={props.fbImage} alt='fb-image' />}
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
            <Row align='center'>
              <Grid.Container>
                <Grid css={{ paddingRight: "5px", marginTop: "2px" }}>
                  <BiLike size={25} />
                </Grid>
              </Grid.Container>
            </Row>
          </Grid>
          <Grid
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
                  <MdChatBubbleOutline size={25} disabled />
                </Grid>
                <Grid>
                  <Text>0</Text>
                </Grid>
              </Grid.Container>
            </Row>
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
            <Row align='center'>
              <Grid.Container>
                <Grid css={{ paddingRight: "5px", marginTop: "2px" }}>
                  <BiShare size={25} disabled />
                </Grid>
                <Grid>
                  <Text>0</Text>
                </Grid>
              </Grid.Container>
            </Row>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
