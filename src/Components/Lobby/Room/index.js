import React from 'react';

import { Container, Flag } from './styles';

function Room({Prime}) {
  return (
      <Container prime={Prime}>
          <Flag title='Brasil'/>
      </Container>
  );
}

export default Room;