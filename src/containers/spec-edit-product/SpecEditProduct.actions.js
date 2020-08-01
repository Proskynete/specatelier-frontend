import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getBrands } from '../../services/brands.service';
import {
  getProductById,
  editProduct,
  getProductsSystems,
  uploadProductImages,
  uploadProductDocuments,
} from '../../services/products.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { onHideSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';

export const GET_SPEC_PRODUCT = 'GET_SPEC_PRODUCT';
export const GET_SPEC_PRODUCT_SUCCESS = 'GET_SPEC_PRODUCT_SUCCESS';
export const GET_SPEC_PRODUCT_ERROR = 'GET_SPEC_PRODUCT_ERROR';

export const onShowSpecEditProduct = ({ id }) => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCT));
  try {
    const { product } = await getProductById(id);
    return dispatch(onActionCreator(GET_SPEC_PRODUCT_SUCCESS, { product }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCT_ERROR, {
      error: true,
      nativeError: error,
    }));
  }
};

export const GET_SPEC_PRODUCTS_SYSTEMS = 'GET_SPEC_PRODUCTS_SYSTEMS';
export const GET_SPEC_PRODUCTS_SYSTEMS_ERROR = 'GET_SPEC_PRODUCTS_SYSTEMS_ERROR';
export const GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS = 'GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS';
export const onGetSpecProductsSystems = ({ itemID }) => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS));

  try {
    const response = await getProductsSystems(itemID);

    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS, { systems: response.systems }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS_ERROR, { error }));
  }
};

export const GET_SPEC_PRODUCTS_BRANDS = 'GET_SPEC_PRODUCTS_BRANDS';
export const GET_SPEC_PRODUCTS_BRANDS_ERROR = 'GET_SPEC_PRODUCTS_BRANDS_ERROR';
export const GET_SPEC_PRODUCTS_BRANDS_SUCCESS = 'GET_SPEC_PRODUCTS_BRANDS_SUCCESS';
export const onGetSpecProductsBrands = () => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS));

  try {
    const response = await getBrands();

    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS_SUCCESS, { brands: response.brands.filter(brand => brand.name !== null) }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS_ERROR, { error }));
  }
};

export const EDIT_SPEC_PRODUCT = 'EDIT_SPEC_PRODUCT';
export const EDIT_SPEC_PRODUCT_ERROR = 'EDIT_SPEC_PRODUCT_ERROR';
export const EDIT_SPEC_PRODUCT_SUCCESS = 'EDIT_SPEC_PRODUCT_SUCCESS';
export const onEditSpecProduct = ({ documents, images }) => async (dispatch, getState) => {
  dispatch(onActionCreator(EDIT_SPEC_PRODUCT));

  try {
    const state = getState();
    const { stepOne, stepTwo } = state.specEditProduct;
    const payload = {
      name: stepOne.name,
      section: stepOne.section?.value,
      item: stepOne.item?.value,
      system: stepOne.system?.value,
      description: stepTwo.description,
      brand: stepTwo.brand.value,
      price: stepTwo.price,
    };
    const response = await editProduct(payload);

    await Promise.all([
      uploadProductImages(response.product.id, images),
      uploadProductDocuments(response.product.id, documents),
    ]);

    return batch(() => {
      dispatch(onActionCreator(EDIT_SPEC_PRODUCT_SUCCESS));
      dispatch(onShowAlertSuccess({ message: 'Producto editado exitosamente' }));
      dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
      dispatch(onHideSpecProductsItemsSuccess());
    });
  } catch (error) {
    return batch(() => {
      dispatch(onActionCreator(EDIT_SPEC_PRODUCT_ERROR, { error }));
      dispatch(onShowAlertSuccess({ message: 'Error al editar producto' }));
    });
  }
};

export const HIDE_SPEC_EDIT_PRODUCT = 'HIDE_SPEC_EDIT_PRODUCT';
export const HIDE_SPEC_EDIT_PRODUCT_SUCCESS = 'HIDE_SPEC_EDIT_PRODUCT_SUCCESS';
export const onHideSpecEditProduct = () => dispatch =>
batch(() => {
  dispatch(onActionCreator(HIDE_SPEC_EDIT_PRODUCT_SUCCESS));
  dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
  dispatch(onHideSpecProductsItemsSuccess());
});