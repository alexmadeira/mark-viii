import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

import Button from '~/components/Buttons';
import Title from '~/components/blocks/Title';
import Image from '~/components/blocks/Image';

import {
  Container,
  Logo,
  TitleBox,
  ViewMore,
  ButtomMore,
  DescriptionBox,
  BigDescriptionBox,
  NextProjectOverlay,
} from './styles';

function Project({ item, type, nextProjectLink }) {
  const [Open, setOpen] = useState(false);
  const [Hover, setHover] = useState(false);
  const ref = createRef();

  function toogleOpen() {
    setOpen(!Open);
  }

  useEffect(() => {
    if (Open) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [Open, ref]);

  return (
    <Container
      ref={ref}
      item={item.order}
      bgimage={item.background.url}
      bgcolor={item.backgroundColor}
      className={`${Open && 'open'} ${nextProjectLink && 'overflow'}`}
      onMouseOver={() => {
        setHover(true);
      }}
      onFocus={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {type === 'simple' && (
        <Button to={`/projeto/${item.slug}`} type="invisibile" className="" />
      )}
      <Image
        src={item.preview.url}
        className={`${nextProjectLink && 'blur'} ${Hover && 'hover'}`}
        alt={item.preview.name}
      />

      {nextProjectLink && <NextProjectOverlay className={Hover && 'hover'} />}
      <Logo className={`logo ${Open && 'open'} ${nextProjectLink && 'center'}`}>
        <img src={item.logo.url} alt={item.logo.name} />
      </Logo>
      {!nextProjectLink && (
        <TitleBox className="title">
          <Title>{item.name}</Title>
        </TitleBox>
      )}
      {type === 'full' && (
        <ViewMore>
          {Open ? (
            <ButtomMore onClick={() => toogleOpen()}>Fechar</ButtomMore>
          ) : (
            <>
              <ButtomMore onClick={() => toogleOpen()}>Ver</ButtomMore>
              <Button to={`/projeto/${item.slug}`} type="solid">
                Completo
              </Button>
            </>
          )}
        </ViewMore>
      )}
      {!nextProjectLink && (
        <DescriptionBox>
          <h3>{item.description}</h3>
        </DescriptionBox>
      )}
      <BigDescriptionBox className={Open && 'open'}>
        <p>{item.longDescription}</p>
      </BigDescriptionBox>
    </Container>
  );
}

Project.defaultProps = {
  type: 'simple',
  nextProjectLink: false,
};

Project.propTypes = {
  item: PropTypes.shape({
    order: PropTypes.number.isRequired,
    background: PropTypes.shape().isRequired,
    backgroundColor: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    preview: PropTypes.shape().isRequired,
    logo: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  nextProjectLink: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
export default Project;
