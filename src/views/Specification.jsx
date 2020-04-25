import React from 'react';
import AlertContainer from '../containers/alert/Alert.container';
import SpecHeaderContainer from '../containers/spec-header/SpecHeader.container';
import SpecDocumentContainer from '../containers/spec-document/SpecDocument.container';
import SpecNavigatorContainer from '../containers/spec-navigator/SpecNavigator.container';
import SpecProductsSectionsContainer from '../containers/spec-products-sections/SpecProductsSections.container';
import SpecProductsItemsContainer from '../containers/spec-products-items/SpecProductsItems.container';
import SpecProductsContainer from '../containers/spec-products/SpecProducts.container';
import SpecModalProduct from '../containers/spec-modal-product/SpecModalProduct.container';
import SpecCreateProductOneContainer from '../containers/spec-create-product/SpecCreateProductStepOne.container';
import SpecCreateProductTwoContainer from '../containers/spec-create-product/SpecCreateProductStepTwo.container';
import SpecCreateProductThreeContainer from '../containers/spec-create-product/SpecCreateProductStepThree.container';
import SpecPanelsLayout from '../components/layouts/SpecPanelsLayout';
import { Root, Header, Main, Navigation, Panels } from './Specification.styles';

/**
 * The Specification's view.
 */
const Specification = () => {
  return (
    <>
      <Root>
        <Header>
          <SpecHeaderContainer />
        </Header>
        <Main>
          <SpecDocumentContainer />
          <Navigation>
            <SpecNavigatorContainer />
            <Panels>
              <SpecPanelsLayout>
                <SpecProductsSectionsContainer />
                <SpecProductsItemsContainer />
              </SpecPanelsLayout>
              <SpecProductsContainer />
            </Panels>
          </Navigation>
        </Main>
      </Root>
      <SpecCreateProductOneContainer />
      <SpecCreateProductTwoContainer />
      <SpecCreateProductThreeContainer />
      <AlertContainer />
      <SpecModalProduct />
    </>
  );
};

export default Specification;