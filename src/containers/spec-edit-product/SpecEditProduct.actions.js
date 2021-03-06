import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getBrands } from '../../services/brands.service';
import {
  getProductById,
  editProduct,
  getProductsSystems,
  uploadProductImages,
  uploadProductDocuments,
  removeProductImages,
  removeProductDocuments,
} from '../../services/products.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { onHideSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';
import { cleanObject } from '../../modules/services';
import { onGetSpecBlocks } from '../spec-document/SpecDocument.actions';

export const GET_SPEC_PRODUCT = 'GET_SPEC_PRODUCT';
export const GET_SPEC_PRODUCT_SUCCESS = 'GET_SPEC_PRODUCT_SUCCESS';
export const GET_SPEC_PRODUCT_ERROR = 'GET_SPEC_PRODUCT_ERROR';
export const SPEC_EDIT_PRODUCT_CLEAN_STORE = 'SPEC_EDIT_PRODUCT_CLEAN_STORE';

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
export const onEditSpecProduct = ({ product, documents, images, documentsToDelete, imagesToDelete, specID }) => async dispatch => {
  try {
    dispatch(onActionCreator(EDIT_SPEC_PRODUCT));
    const patch = [
      editProduct(cleanObject(product)),
    ];

    if (images?.length) patch.concat(uploadProductImages({ productID: product.id, images }));
    if (documents?.length) patch.concat(uploadProductDocuments({ productID: product.id, documents }));
    if (imagesToDelete?.length) patch.concat(removeProductImages({ productID: product.id, images: imagesToDelete }));
    if (documentsToDelete?.length) patch.concat(removeProductDocuments({ productID: product.id, documents: documentsToDelete }));

    const results = await Promise.all(patch);
    if (results.some(r => r.error)) throw Error;
    return batch(() => {
      dispatch(onGetSpecBlocks(specID))
      dispatch(onActionCreator(EDIT_SPEC_PRODUCT_SUCCESS));
      dispatch(onShowAlertSuccess({ message: 'Producto editado exitosamente' }));
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

export const cleanStore = () => dispatch => dispatch(onActionCreator(SPEC_EDIT_PRODUCT_CLEAN_STORE));
