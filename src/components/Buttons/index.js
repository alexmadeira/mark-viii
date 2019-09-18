import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Outline, Solid, Invisibile } from './styles';

function Buttons({ type, children, to, external }) {
  switch (type) {
    case 'solid':
      return (
        <Link to={to}>
          <Solid>{children}</Solid>
        </Link>
      );
    case 'invisibile':
      return (
        <Link to={to}>
          <Invisibile>{children}</Invisibile>
        </Link>
      );
    case 'outline':
      return (
        <Link to={to}>
          <Outline>{children}</Outline>
        </Link>
      );
    case 'link':
      return (
        <Outline
          href={external.href}
          target={external.target}
          rel={external.rel}
        >
          {children}
        </Outline>
      );
    default:
      return <Solid content={children} />;
  }
}
Buttons.defaultProps = {
  external: {},
  to: null,
  children: null,
};

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  external: PropTypes.shape(),
};
export default Buttons;
