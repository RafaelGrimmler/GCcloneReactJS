import React from 'react';

import { Container, MessageContainer, ChatIconContainer, ChatIconB, ChatSituationContainer, ChatSituation, ChatSituationFace } from './styles';

function Talkbar() {
  return (
    <Container>
        <MessageContainer>
            <ChatIconContainer>
                <ChatIconB />
            </ChatIconContainer>
        </MessageContainer>

        <ChatSituationContainer>
            <ChatSituation>
                <ChatSituationFace />
                <small>NENHUMA CONVERSA</small>
            </ChatSituation>
        </ChatSituationContainer>
    </Container>
  );
}

export default Talkbar;