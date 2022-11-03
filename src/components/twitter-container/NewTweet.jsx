import { Card, Grid, Text, Link, Input, Button, Row } from "@nextui-org/react";

export default function NewTweet() {
  return (
    <Grid css={{paddingBottom: "15px"}}>
      <Card variant="shadow" css={{ p: "$6", mw: "100%", padding: "0" }}>
        <Card.Header>
          <img
            alt='nextui logo'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width='34px'
            height='34px'
          />
          <Text h4 css={{ lineHeight: "$xs", pl: "$6" }}>
            Post new tweet:
          </Text>
        </Card.Header>
        <form>
          <Card.Body>
            <label>
              <Input placeholder="What's happening?" name='new-tweet' css={{width: "100%"}}></Input>
            </label>
          </Card.Body>
          <Card.Footer justify="flex-end">
            <Button auto round type='submit'>
              Tweet
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </Grid>
  );
}
