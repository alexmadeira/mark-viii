import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Footer from '~/components/blocks/Footer';
import Title from '~/components/blocks/Title';
import Image from '~/components/blocks/Image';
import Back from '~/components/blocks/Back';

import NextProject from '~/components/blocks/Project';

import {
  Main,
  Header,
  ProjetDescriptionBox,
  ProjetDescription,
  Container,
  TitleBox,
  AgencyBox,
  AgencyDescriptionBox,
  AgencyDescription,
  DestaqueBox,
  ProdutoDestaqueBox,
  DestaquesBox,
  NextProjectBox,
} from './styles';

function Project({ match: { params } }) {
  const { slug } = params;
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const reponse = await api.get(`project/${slug}`);
      setProject(reponse.data);
      setLoading(false);
    };

    getProject();
  }, [slug]);

  const {
    background,
    url,
    logo,
    longDescription,
    backgroundColor,
    agency,
    destaque,
    produtoDestaque,
    destaqueEsquerda,
    destaqueCentro,
    destaqueDireita,
    nextProject,
  } = project;

  return (
    <>
      {!loading && (
        <Main>
          <Back to="/projetos" text="Projetos" />
          <Header bgColor={backgroundColor}>
            <Image
              className="backgroundImage"
              src={background.url}
              alt={background.name}
            />
            <ParallaxProvider>
              <Parallax className="logo" y={[-50, 50]} tagOuter="figure">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Image src={logo.url} alt={logo.name} />
                </a>
              </Parallax>
              <Parallax
                className="ProjetDescriptionBox"
                y={[-30, 30]}
                tagOuter="div"
              >
                <ProjetDescriptionBox>
                  <ProjetDescription>
                    <h2>{longDescription}</h2>
                  </ProjetDescription>
                </ProjetDescriptionBox>
              </Parallax>
            </ParallaxProvider>
          </Header>
          <Container bgColor={backgroundColor}>
            <AgencyBox>
              <AgencyDescriptionBox>
                <AgencyDescription>
                  <TitleBox>
                    <Title type="reverse">Agencia</Title>
                  </TitleBox>
                  <h2>{agency.name}</h2>
                  <p>{agency.description}</p>
                </AgencyDescription>
              </AgencyDescriptionBox>
              <Image src={agency.image.url} alt={agency.image.name} />
            </AgencyBox>
            <DestaqueBox>
              <Image src={destaque.url} alt={destaque.name} />
            </DestaqueBox>
            <ProdutoDestaqueBox>
              <Image src={produtoDestaque.url} alt={produtoDestaque.name} />
            </ProdutoDestaqueBox>

            <DestaquesBox>
              <Image src={destaqueEsquerda.url} alt={destaqueEsquerda.name} />
            </DestaquesBox>
            <DestaquesBox>
              <Image src={destaqueCentro.url} alt={destaqueCentro.name} />
            </DestaquesBox>
            <DestaquesBox>
              <Image src={destaqueDireita.url} alt={destaqueDireita.name} />
            </DestaquesBox>
            <NextProjectBox>
              <NextProject item={nextProject} type="simple" nextProjectLink />
            </NextProjectBox>
          </Container>
          <Footer />
        </Main>
      )}
    </>
  );
}

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default Project;
