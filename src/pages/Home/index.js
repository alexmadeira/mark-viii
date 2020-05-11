import React from 'react';

import Footer from '~/components/blocks/Footer';
import Banner from '~/components/Banner';
import ProjectsList from '~/components/ProjectsList';

import Button from '~/components/Buttons';

import { Container, Crooked, Center, Basic, FigureBox, Title } from './styles';

function Home() {
  return (
    <>
      <Container>
        <Banner />

        <Crooked>
          <ProjectsList limit={6} order="asc" type="simple" name="HOME" />
          <Basic reverse top="-40px">
            <h3>Quer saber mais? </h3>
            <p>Dê uma olhadinha nos projetos que participei</p>
            <Center>
              <Button to="/projetos" type="outline">
                Projetos
              </Button>
              <Button
                external={{
                  href: '/alex_madeira_curriculo.pdf',
                  target: '_blank',
                  rel: '',
                }}
                type="link"
              >
                Curriculo
              </Button>
            </Center>
          </Basic>
        </Crooked>
        <Basic top="40px" shadow>
          <Title>
            Layout responsivo, fluido, mobile e todas as variacões possíveis
          </Title>
          <FigureBox>
            <img
              src="https://alexmadeira.sirv.com/mark-viii/imagens/geral/Responsive.jpg"
              alt="responsive"
            />
          </FigureBox>
        </Basic>
        <Basic>
          <h3>Gostou do que viu?</h3>
          <p>Entre em contato, ou não</p>
          <div>
            <Button
              external={{
                href: 'mailto:alex.c.madeira@gmail.com',
                target: '_top',
                rel: 'noopener noreferrer',
              }}
              type="link"
            >
              Contato
            </Button>
          </div>
        </Basic>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
