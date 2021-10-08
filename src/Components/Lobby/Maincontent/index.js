import React from 'react';

import { Container, Wrapper, Roomscontainer } from './styles';

// components
import Lobbysetting from '../Lobbysetting';

function Maincontent() {
  return (
    <Container>
      <Wrapper>
        <Lobbysetting />
        <Roomscontainer>
          
        </Roomscontainer>
      </Wrapper>
    </Container>
  );
}

export default Maincontent;