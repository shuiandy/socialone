import { Container, Grid } from "@nextui-org/react";
import React, { useState, useEffect } from 'react';
import FbCards from "./FbCards";
import FbHeader from "./FbHeader";

export default function FbSection() {
  return (
    <Container display="block" gap={0}>
      <Grid.Container direction="column">
          <FbHeader />
          <FbCards />
      </Grid.Container>
    </Container>
  )
} 