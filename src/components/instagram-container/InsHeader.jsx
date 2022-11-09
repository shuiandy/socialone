import { Card, Grid, Text, Row } from "@nextui-org/react";
import { BiRefresh } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

export default function InsHeader() {
  return (
    <Grid>
      <Card>
        <Card.Body css={{ p: "$6" }}>
          <Row gap={0} warp='nowarp' justify='space-between' align='center'>
            <Grid.Container>
              <BsInstagram size={25} />
            </Grid.Container>
            <Grid.Container justify='center'>
              <Grid>
                <Text
                  h4
                  size={20}
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    m: 0,
                  }}
                >
                  My Feed
                </Text>
              </Grid>
            </Grid.Container>
            <Grid.Container justify='flex-end'>
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
