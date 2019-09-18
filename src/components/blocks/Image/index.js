import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Preload, Content } from './styles';

function Image({ src, alt, title, className }) {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <Container className={className}>
      <Preload
        src={`${src}?thumb=true`}
        alt={alt}
        className={`${loadImage && 'hidden'} `}
      />
      <Content
        src={src}
        alt={alt}
        title={title}
        className={loadImage && 'show'}
        onLoad={() => setLoadImage(true)}
      />
    </Container>
  );
}
Image.defaultProps = {
  className: '',
  title: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};
export default Image;
