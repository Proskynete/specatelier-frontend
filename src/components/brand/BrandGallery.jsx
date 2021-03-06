import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './BrandGallery.styles';
import { Image } from '../SpecComponents';

const names = ['one', 'two', 'three', 'four', 'five'];

const BrandGallery = ({ images }) => {
  const imgs = images.map((img, i) => ({ ...img, name: names[i] }));
  return (
    <Container>
      {imgs.map(img => (
        <Content key={img.id} name={img.name} >
          <Image src={img.url} height="100%" width="100%" type="cover" />
        </Content>
      ))}
    </Container>
  );
};

BrandGallery.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

BrandGallery.defaultProps = {
  images: [],
};

export default BrandGallery;