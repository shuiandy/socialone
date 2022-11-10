import { Grid, Loading } from "@nextui-org/react";

export default function LoadingState() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Loading type="gradient" size="xl" color="secondary" />
      </Grid>
    </Grid.Container>
  )
}