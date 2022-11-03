import { Card, Grid, Text, Row, Image } from "@nextui-org/react";
import { BiLike, BiShare } from "react-icons/bi";
import { MdChatBubbleOutline } from "react-icons/md";
export default function FbCardItem() {
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
        <Text>
          God of War Ragnarök Digital Deluxe Edition includes the Darkdale Armor
          Set and Weapon Components, Digital Soundtrack and more
        </Text>
        <Image src='https://scontent-ord5-1.xx.fbcdn.net/v/t45.1600-4/310413672_23852840241500333_8383192879361248677_n.png?stp=cp0_dst-jpg_q90_s1080x2048_spS444&_nc_cat=1&ccb=1-7&_nc_sid=67cdda&_nc_ohc=1wzxveUuiXcAX9pVCBo&_nc_ht=scontent-ord5-1.xx&oh=00_AfChcC5HQ9Szmrr88UHIchX5n_vIWan-mKKKzP5s_Nf5Tw&oe=6369085A' />
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
            <BiLike size={25} />
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
            <BiShare size={25} />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
