import React from 'react';

import {
  Container,
  LeftContent,
  Descripton,
  RightContent,
  Skills,
} from './styles';

function Curriculo() {
  return (
    <Container>
      <LeftContent>
        <Descripton>
          <h1>Hello world</h1>
          <p>
            My name is Marcelo Gil. I’m a designer and a developer currently
            living and working in Switzerland. I have a vast experience in
            Editorial and Multimedia Design as well as Front-end development for
            Web and Mobile. Right now I’m focused on UI innovation, but also in
            creating tools to deploy the same unified UX for multiple apps.
          </p>
        </Descripton>
        <Skills>bars</Skills>
      </LeftContent>
      <RightContent>
        <img src="https://cataas.com/cat?width=840&height=640" alt="" />
      </RightContent>
    </Container>
  );
}

export default Curriculo;
