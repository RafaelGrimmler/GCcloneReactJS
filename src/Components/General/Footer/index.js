import React from 'react';

 import { Container, Playingamersclub, Aboutproject, Aboutme, Wrapper, Githubicon} from './styles';

function Footer() {
  return (
      <Container>
        <Wrapper>
          <a href="https://gamersclub.com.br/">
            <Playingamersclub>
              <span>JOGUE NA GAMERSCLUB</span>
            </Playingamersclub>
          </a>
          <Aboutproject>
            <p>Este projeto foi feito com o único fim de aprendizagem, todos os creditos de design vão para a equipe da <a href="https://gamersclub.com.br/">Gamers Club</a>, o Maior Clube de CS:GO do Mundo.</p>
          </Aboutproject>
          <Aboutme>
            <h2>Dev Rafael Grimmler</h2>
            <a href="https://github.com/RafaelGrimmler/GCcloneReactJS">
              <div>
                <p>Código fonte</p>
                <Githubicon />
              </div>
            </a>
          </Aboutme>
        </ Wrapper>
      </Container>
  );
}

export default Footer;