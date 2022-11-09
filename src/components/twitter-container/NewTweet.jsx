import { Card, Grid, Text, Input, Button, Image } from "@nextui-org/react";

export default function NewTweet(props) {
  const userInfo = props.twitterUserInfo;
  const submitTweet = (event) => {
    console.log(event);
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
              />
            </Grid>
            <Grid>
              <Text h3 css={{ lineHeight: "$xs", pl: "$6" }}>
                Post new tweet:
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <form onSubmit={(e) => e.preventDefault()}>
          <Card.Body>
            <Input
              size='lg'
              aria-label='new-tweet'
              placeholder="What's happening?"
              name='new-tweet'
              css={{ width: "100%" }}
            />
          </Card.Body>
          <Card.Footer css={{ justifyContent: "flex-end" }}>
            <Button auto type='submit' onChange={(event) => submitTweet(event)}>
              Tweet
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </Grid>
  );
}
