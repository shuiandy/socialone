import { Card, Grid, Image, Row, Text } from "@nextui-org/react";
import { ImCalendar, ImLocation } from "react-icons/im";
import moment from "moment";
import TweetCards from "./tweetCards";
import { useRecoilValue } from "recoil";
import { BsTwitter } from "react-icons/bs";
import { twitterUserTimeline } from "../../hooks/useRecoil";

export default function TwitterUserInfo(props) {
  const userInfo = props.twitterUserInfo;
  const userTimeline = useRecoilValue(twitterUserTimeline);
  const joinedTime = moment(userInfo.created_at).format("MMM DD YYYY");
  const userNormalProfilePhoto = userInfo.profile_image_url.replace(
    "_normal",
    ""
  );

  return (
    <Grid.Container>
      <Grid css={{ width: "100%", paddingBottom: "25px" }}>
        <Card>
          <Card.Body
            css={{
              p: "$6",
            }}
          >
            <Row gap={0} warp="nowarp" justify="space-between" align="center">
              <Grid.Container>
                <BsTwitter size={25} />
              </Grid.Container>
              <Grid.Container justify="center">
                <Grid>
                  <Text h4 size={20} css={{ m: 0 }}>
                    My Profile
                  </Text>
                </Grid>
              </Grid.Container>
              <Grid.Container
                justify="flex-end"
                display="inline-flex"
              ></Grid.Container>
            </Row>
          </Card.Body>
        </Card>
      </Grid>
      <Card>
        <Card.Header>
          <Grid.Container justify="center">
            <Grid>
              <Image
                alt="twitter-user-image"
                autoResize
                width="180px"
                src={userNormalProfilePhoto}
                css={{ borderRadius: "50%" }}
              />
              <Row align="center" justify="center" css={{ paddingTop: "15px" }}>
                <Text h2 b>
                  {userInfo.name}
                </Text>
              </Row>
              <Row align="center" justify="center">
                <Text h3>@{userInfo.username}</Text>
              </Row>
              <Row align="center" css={{ width: "100%" }}>
                <Grid.Container>
                  <Grid>
                    <ImLocation size={20} />
                  </Grid>
                  <Grid>
                    <Text h6>{userInfo.location}</Text>
                  </Grid>
                  <Grid css={{ paddingLeft: "10px" }}>
                    <Row>
                      <ImCalendar size={20} />
                      <Text h6>Joined {joinedTime}</Text>
                    </Row>
                  </Grid>
                </Grid.Container>
              </Row>
              <Row css={{ width: "100%" }}>
                <Grid.Container justify="center">
                  <Grid css={{ paddingRight: "5px" }}>
                    <Text h5>{userInfo.public_metrics.following_count}</Text>
                  </Grid>
                  <Grid>
                    <Text h5>Following</Text>
                  </Grid>
                  <Grid css={{ paddingLeft: "10px" }}>
                    <Row align="center">
                      <Grid css={{ paddingRight: "5px" }}>
                        <Text h5>
                          {userInfo.public_metrics.followers_count}
                        </Text>
                      </Grid>
                      <Grid>
                        <Text h5>Followers</Text>
                      </Grid>
                    </Row>
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
