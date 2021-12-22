import React from 'react';

import { Container, Topside, Botside, BackgroundImage, BackgroundImageEffect } from './styles';

function Background() {
  return (
      <Container>
          <Topside/>
          <Botside>
            <BackgroundImage/>
            <BackgroundImageEffect/>
          </Botside>
      </Container>
  );
}

export default Background;