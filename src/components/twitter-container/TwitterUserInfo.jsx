import { Card, Grid, Image, Text, Row, Col } from "@nextui-org/react";
import { ImLocation, ImCalendar } from "react-icons/im";
import moment from "moment";
import TweetCards from "./tweetCards";
import { useRecoilValue } from "recoil";
import { twitterUserTimeline } from "../../hooks/useRecoil";
export default function TwitterUserInfo(props) {
  const userInfo = props.twitterUserInfo;
  const userTimeline = useRecoilValue(twitterUserTimeline);
  const joinedTime = moment(userInfo.created_at).format("MMM DD YYYY");
  return (
    <Grid.Container>
      <Card>
        <Card.Header>
          <Grid.Container justify='center'>
            <Grid>
              <Row>
                <Image
                  alt='twitter-user-image'
                  src={userInfo.profile_image_url}
                  css={{ width: "100px" }}
                />
              </Row>
              <Row align='center'>
                <Text b>{userInfo.name}</Text>
              </Row>
              <Row>
                <Text b>@{userInfo.username}</Text>
              </Row>
              <Row align='center'>
                <Grid.Container>
                  <Grid>
                    <ImLocation size={20} />
                  </Grid>
                  <Grid>
                    <Text>{userInfo.location}</Text>
                  </Grid>
                </Grid.Container>
                <Grid.Container>
                  <Grid>
                    <ImCalendar size={20} />
                  </Grid>
                  <Grid>
                    <Text>Joined {joinedTime}</Text>
                  </Grid>
                </Grid.Container>
              </Row>
            </Grid>
          </Grid.Container>
        </Card.Header>
      </Card>
      <TweetCards tweets={userTimeline} />
    </Grid.Container>
  );
}
