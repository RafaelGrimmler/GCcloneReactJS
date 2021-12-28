import React from 'react';

import { Container, Topside, Botside, BackgroundImage, BackgroundImageEffect, BackgroundMapBox, BackgroundMapImage } from './styles';

function Background() {
  return (
      <Container>
          <Topside/>
          <Botside>
            <BackgroundImage/>
            <BackgroundImageEffect/>
            <BackgroundMapBox>
              <BackgroundMapImage/>
            </BackgroundMapBox>
          </Botside>
      </Container>
  );
}

export default Background;