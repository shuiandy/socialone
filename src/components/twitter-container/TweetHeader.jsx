import { Card, Grid, Text, Row } from "@nextui-org/react";
import { BiRefresh, BiSearch } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import useApplicationData from "../../hooks/useApplicationData";

export default function TweetHeader() {
  const { fetchTwitterData } = useApplicationData();
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
              <Grid>
                <BiRefresh size={25} onClick={fetchTwitterData} />
              </Grid>
              <Grid>
                <BiSearch size={25} />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  );
}
