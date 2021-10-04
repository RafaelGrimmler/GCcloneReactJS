import React from 'react';

import { Container, Wrapper } from './styles';

// components
import Lobbysetting from '../Lobbysetting';

function Maincontent() {
  return (
    <Container>
      <Wrapper>
        <Lobbysetting />
      </Wrapper>
    </Container>
  );
}

export default Maincontent;