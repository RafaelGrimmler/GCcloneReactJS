import React from 'react';

import { Container, LeftSide, RightSide, Logo } from './styles';

function Header() {
  return (
      <Container>
          <LeftSide>
            <Logo>
                <a href="https://gamersclub.com.br/">
                    <div>
                        <div/>
                    </div>
                </a>
            </Logo>
          </LeftSide>

          <RightSide>

          </RightSide>
      </Container>
  );
}

export default Header;