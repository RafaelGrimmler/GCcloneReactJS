import React from 'react';

import { Container } from './styles';

function MiniboxesHeader({ description, svg, svgzoom, svgpositionY }) {
  return (
      <a href="https://gamersclub.com.br/">
        <Container svg={svg} svgzoom={svgzoom} svgpositionY={svgpositionY}>
            <div />
            <div>
                <span>{description}</span>
            </div>
            <div />
        </Container>
      </a>
  );
}

export default MiniboxesHeader;