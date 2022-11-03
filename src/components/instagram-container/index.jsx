import { Container, Col, Row, Grid } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import InsCards from "./InsCards";
import InsHeader from "./InsHeader";

export default function InsSection() {
  return (
    <Container display='block' gap={0}>
      <Grid.Container direction="column">
          <InsHeader />
          <InsCards />
      </Grid.Container>
    </Container>
  );
}
