import React from 'react';

import Footer from '~/components/blocks/Footer';
import ProjectsList from '~/components/ProjectsList';
import Back from '~/components/blocks/Back';

import { Container } from './styles';

export default function Projects() {
  return (
    <>
      <Back to="/" text="Home" />
      <Container>
        <ProjectsList order="asc" type="full" name="PROJECTS" />
      </Container>
      <Footer />
    </>
  );
}
