import { Card, Grid, Text, Input, Button, Image } from "@nextui-org/react";
import { useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
export default function NewTweet(props) {
  const userInfo = props.twitterUserInfo;
  const { submitNewTweet } = useApplicationData();
  const [input, setInput] = useState("");
  const submitTweet = (tweet) => {
    submitNewTweet(tweet);
  };
  return (
    <Grid css={{ paddingBottom: "15px" }}>
      <Card variant='shadow' css={{ p: "$6", mw: "100%", padding: "0" }}>
        <Card.Header justify='center'>
          <Grid.Container direction='row'>
            <Grid>
              <Image
                alt='twitter-profile-image'
                src={userInfo.profile_image_url}
                width='50px'
                height='50px'
                css={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid>
              <Text h3 css={{ lineHeight: "$xs", pl: "$6" }}>
                Post new tweet:
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body>
          <Input
            size='lg'
            aria-label='new-tweet'
            placeholder="What's happening?"
            name='new-tweet'
            css={{ width: "100%" }}
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
        </Card.Body>
        <Card.Footer css={{ justifyContent: "flex-end" }}>
          <Button auto type='submit' onPress={() => submitTweet(input)}>
            Tweet
          </Button>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
