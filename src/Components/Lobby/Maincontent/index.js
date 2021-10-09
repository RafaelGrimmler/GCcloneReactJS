import React from 'react';

import { Container, Wrapper, Roomscontainer } from './styles';

// components
import Lobbysetting from '../Lobbysetting';
import Room  from '../Room';

function Maincontent() {
  return (
    <Container>
      <Wrapper>
        <Lobbysetting />
        <Roomscontainer>
          <Room Prime={true}/>
          <Room Prime={false}/>
          <Room Prime={true}/>
          <Room Prime={true}/>
          <Room Prime={true}/>
        </Roomscontainer>
      </Wrapper>
    </Container>
  );
}

export default Maincontent;