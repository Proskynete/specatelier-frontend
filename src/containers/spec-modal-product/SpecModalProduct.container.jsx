import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, Modal, Button, Image } from '../../components/SpecComponents';
import {
  ButtonClose,
  Container,
  Content,
  Header,
  Title,
  Section,
  ImagesContainer,
  ImagesContent,
  ProductImageSelectedContainer,
  ProductImageSelected,
  InfoContainer,
  InfoContent,
  ProductName,
  ProductDescription,
  ProductBrand,
  Actions,
  Icons,
  Icon,
} from './SpecModalProduct.styles';

import { closeModal } from './SpecModalProduct.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';


const SpecModalProduct = () => {
  const getFirstImg = data => (data?.images?.length && data.images[0]) || {};
  const { product, showModalProduct } = useSelector(state => state.specModalPorduct);
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = img => () => selectImg(img);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (product) selectImg(getFirstImg(product));
  }, [product]);

  const onContact = () => dispatch(openContactModal({ 
    selectedBrand: product.brand,
    selectedProduct: product,
  }));
  
  const onCloseModal = () => dispatch(closeModal());

  // Download documents 
  const handleIconClick = documents => () => {
    documents.forEach(async doc => {
      const link = document.createElement("a");
      link.download = doc;
      link.href = doc;
      link.target = '_blank';
      link.id = 'doc';
      document.body.appendChild(link);
      link.click();
      return setTimeout(() => document.body.removeChild(link), 2000);
    });
  };

  if (!showModalProduct) return null;
  if (!product || !product.id) return <Loading />

  return (
    <Modal show={showModalProduct} onClose={onCloseModal}>
      <Container>
        <Content>
          <ButtonClose
            role="button"
            tabIndex="0"
            onKeyDown={onCloseModal}
            onClick={onCloseModal}
          >
            <i className="fas fa-times" />
          </ButtonClose>
          <Header>
            <Title>
              {`${product.name} / ${product.short_desc}`}
            </Title>
          </Header>
          <Section>
            <ImagesContainer>
              {!!product?.images?.length && product.images.map((img, i) =>
                <ImagesContent
                  key={img.id}
                  role="button"
                  tabIndex={i}
                  onKeyDown={onSelectImg(img)}
                  onClick={onSelectImg(img)}
                  active={img.id && img.id === selectedImg.id}
                >
                  <Image src={img?.urls?.medium} type="responsive" height="80px" width="100%" />
                </ImagesContent>
              )}
            </ImagesContainer>
            {/* Image primary */}
            <ProductImageSelectedContainer>
              <ProductImageSelected>
                <Image src={selectedImg?.urls?.medium} type="cover"  height="240px" />
              </ProductImageSelected>
            </ProductImageSelectedContainer>
            {/* Info Product */}
            <InfoContainer>
              <InfoContent>
                <ProductName>
                  {product.reference}
                </ProductName>
                <ProductDescription>
                  {product.long_desc}
                </ProductDescription>
                <ProductBrand>
                  {`${product?.system?.name || ''}: ${product?.brand?.name || ''}`}
                </ProductBrand>
                <Actions>
                  <Button
                    variant="secondary"
                    onClick={onContact}
                  >
                    Contactar
                  </Button>
                  <Icons>
                    <Icon
                      type="dwg"
                      active={!!product.dwg_url}
                      onClick={handleIconClick([product.dwg_url])}
                    />
                    <Icon
                      type="bim"
                      active={!!product.dwg_url}
                      onClick={handleIconClick([product.bim_url])}
                    />
                    <Icon
                      type="tech"
                      active={!!(Array.isArray(product.spec_pdf_url) && product.spec_pdf_url.length)}
                      onClick={handleIconClick(product.spec_pdf_url)}
                    />
                  </Icons>
                </Actions>
              </InfoContent>
            </InfoContainer>
          </Section>
        </Content>
      </Container>
    </Modal>
  );
};

export default SpecModalProduct;