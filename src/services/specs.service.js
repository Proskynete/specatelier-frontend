import { API_BASE_URL } from '../config/constants/environment';
import { deleteJsonRequest, getJsonRequest, postJsonRequest, patchJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services'

/**
 * Add a block to the spec.
 */
export const addSpecBlock = factoryService(({ itemID, productID, sectionID, specID, userID }) =>
  postJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_product`,
    {
      item: itemID,
      product: productID,
      section: sectionID,
    },
  ),
);

/**
 * Add a block's text to the given block.
 */
export const addSpecBlockText = factoryService(({ blockID, specID, textValue, userID }) =>
  postJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_text`,
    { block: blockID, text: textValue },
  ),
);

/**
 * Delete a block from the spec.
 */
export const deleteSpecBlock = factoryService(({ blockID, specID, userID }) =>
  deleteJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_product`,
    { block: blockID },
  ),
);

/**
 * Delete the image of the given block.
 */
export const deleteSpecBlockImage = factoryService(({ blockID, specID, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_product_image`,
    { block: blockID },
  ),
);

/**
 * Delete the given block's text.
 */
export const deleteSpecBlockText = factoryService(({ specID, textID, userID }) =>
  deleteJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_text`,
    { text: textID },
  ),
);

/**
 * Get the spec blocks.
 */
export const getSpecBlocks = factoryService(({ specID, userID }) =>
  getJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${specID}`),
);

/**
 * Sort the spec blocks.
 */
export const sortSpecBlocks = factoryService(({ blocks, specID, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/reorder_blocks`,
    { blocks },
  ),
);

/**
 * Update the image of the given block.
 */
export const updateSpecBlockImage = factoryService(({ blockID, imageID, specID, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/add_product_image`,
    { block: blockID, image: imageID },
  ),
);

/**
 * Update the given block's text.
 */
export const updateSpecBlockText = factoryService(({ specID, textID, textValue, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/edit_text`,
    { text: textID, updated_text: textValue },
  ),
);

/**
 * Download current specification.
 */

export const downloadSpec = factoryService(({ specID, userID }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/download_word`
  ),
);