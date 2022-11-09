import { Card, Grid, Text, Row } from "@nextui-org/react";
import { BiRefresh, BiSearch } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

export default function FbHeader() {
  return (
    <Grid>
      <Card>
        <Card.Body
          css={{
            p: "$6",
          }}
        >
          <Row gap={0} warp='nowarp' justify='space-between' align='center'>
            <Grid.Container>
              <BsFacebook size={25} />
            </Grid.Container>
            <Grid.Container justify='center'>
              <Grid>
                <Text h4 size={20} css={{ m: 0 }}>
                  My Timeline
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
                <BiRefresh size={25} />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  );
}
