import React from 'react';
import PropTypes from 'prop-types';

import Buttom from '~/components/Buttons';

import { Container, Arrow, ArrowBox } from './styles';

function Back({ text, to }) {
  return (
    <Container>
      <ArrowBox>
        <Buttom to={to} type="invisibile">
          <Arrow className="animated-arrow">
            <span className="the-arrow -left">
              <span className="shaft" />
            </span>
            <span className="main">
              <span className="text">{text}</span>
              <span className="the-arrow -right">
                <span className="shaft" />
              </span>
            </span>
          </Arrow>
        </Buttom>
      </ArrowBox>
    </Container>
  );
}

Back.defaultProps = { text: 'Voltar' };

Back.propTypes = { text: PropTypes.string, to: PropTypes.string.isRequired };
export default Back;
