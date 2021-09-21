import React from 'react';
import LevelPalette from '../../LevelPalette.json'

import { Container, LevelCircle } from './styles';

function Level({ value }) {

    const currentLevel = LevelPalette[value]

    return (
      <Container>
          <LevelCircle bg={currentLevel.backgroundColor}>
              <span>{value}</span>
          </LevelCircle>
      </Container>
    );
}

export default Level;