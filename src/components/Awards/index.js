import React from 'react';

import { Container, Award } from './styles';

export default function Awards() {
  return (
    <Container>
      <Award
        src="https://alexmadeira.sirv.com/mark-viii/imagens/geral/cssda/best-innovation-white.png"
        title="best innovation"
        alt="bestinnovation"
      />
      <Award
        src="https://alexmadeira.sirv.com/mark-viii/imagens/geral/cssda/best-ui-purple.png"
        title="best ui"
        alt="best ui"
      />
      <Award
        src="https://alexmadeira.sirv.com/mark-viii/imagens/geral/cssda/best-ux-black.png"
        title="best ux"
        alt="best ux"
      />
    </Container>
  );
}
