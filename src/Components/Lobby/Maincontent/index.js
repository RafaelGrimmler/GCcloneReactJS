import React from 'react';

import { Container, Wrapper, Roomscontainer } from './styles';

// components
import Lobbysetting from '../Lobbysetting';
import Room  from '../Room';

// profiles
import Profiles from '../../../Profiles.json';

function Maincontent() {

  return (
    <Container>
      <Wrapper>
        <Lobbysetting />
        <Roomscontainer>
          <Room p1={Profiles[2]} p2={Profiles[3]} p3 ={Profiles[4]} p4={Profiles[5]} p5={null}/>
          <Room p1={Profiles[6]} p2={Profiles[7]} p3 ={Profiles[8]} p4={Profiles[9]} p5={null}/>
          <Room p1={Profiles[10]} p2={Profiles[11]} p3 ={Profiles[12]} p4={null} p5={null}/>
          <Room p1={Profiles[13]} p2={Profiles[14]} p3 ={Profiles[15]} p4={Profiles[16]} p5={Profiles[17]}/>
          <Room p1={Profiles[18]} p2={Profiles[19]} p3 ={Profiles[20]} p4={Profiles[21]} p5={null}/>
          <Room p1={Profiles[25]} p2={Profiles[26]} p3 ={Profiles[35]} p4={Profiles[28]} p5={null}/>
          <Room p1={Profiles[36]} p2={Profiles[27]} p3 ={Profiles[40]} p4={Profiles[41]} p5={null}/>
          <Room p1={Profiles[42]} p2={Profiles[29]} p3 ={Profiles[39]} p4={Profiles[37]} p5={null}/>
          <Room p1={Profiles[44]} p2={Profiles[25]} p3 ={null} p4={null} p5={null}/>
          <Room p1={Profiles[38]} p2={null} p3 ={null} p4={null} p5={null}/>
        </Roomscontainer>
      </Wrapper>
    </Container>
  );
}

export default Maincontent;