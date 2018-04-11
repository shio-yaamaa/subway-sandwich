/* global SIX_INCH_STANDARD_SIZE */
/* global FOOTLONG_STANDARD_SIZE */
/* global INGREDIENT_NAME_ATTR */
/* global ORDER_ATTR */

/* global menuData */
/* global breadTopData */

/* global camelToSnake */
/* global snakeToCamel */
/* global getItemName */
/* global getSectionName */

/* global middle */
/* global previewContainer */

let previewScale;

const setPreviewContainerSize = (isSixInch) => {
  const standardSize = isSixInch ? SIX_INCH_STANDARD_SIZE : FOOTLONG_STANDARD_SIZE;
  const isBoundByWidth = middle.clientWidth / standardSize[0] < middle.clientHeight / standardSize[1];
  previewScale = isBoundByWidth
    ? middle.clientWidth / standardSize[0]
    : middle.clientHeight / standardSize[1];
  previewContainer.style.width = (isBoundByWidth
    ? middle.clientWidth
    : middle.clientHeight / standardSize[1] * standardSize[0]) + 'px';
  previewContainer.style.height = (isBoundByWidth
    ? middle.clientWidth / standardSize[0] * standardSize[1]
    : middle.clientHeight) + 'px';
};
setPreviewContainerSize(menuData.breadSize.sixInch.selected);

const showIngredientPreview = (ingredient, isSixInch) => {
  const ingredientName = getItemName(ingredient);
  if (getSectionName(ingredientName) === 'bread') {
    const imageName = `${camelToSnake(ingredientName)}_${isSixInch ? 'six_inch' : 'footlong'}_bottom`;
    const position = ingredient.position[isSixInch ? 'sixInch' : 'footlong'];
    createPreviewImage(ingredientName, imageName, position, previewScale, ingredient.order);
  } else {
    /*for (let i = 1; i >= (isSixInch ? 1 : 0); i--) { // Reverse the order to put the left one on the top
      const position = isSixInch ? ingredient.position.sixInch : ingredient.position.footlong[i];
      createPreviewImage(ingredientName, camelToSnake(ingredientName), position, previewScale, ingredient.order);
    }*/
    for (let i = 0; i < (isSixInch ? 1 : 2); i++) {
      const position = isSixInch ? ingredient.position.sixInch : ingredient.position.footlong[i];
      createPreviewImage(ingredientName, camelToSnake(ingredientName), position, previewScale, ingredient.order);
    }
  }
};

const showBreadTopPreview = () => {
  const isSixInch = menuData.breadSize.sixInch.selected;
  const breadName = Object.keys(menuData.bread).reduce((accumulator, currentBreadName) => {
    return menuData.bread[currentBreadName].selected ? currentBreadName : accumulator;
  }, undefined);
  const imageName = `${camelToSnake(breadName)}_${isSixInch ? 'six_inch' : 'footlong'}_top`;
  createPreviewImage(
    'bread_top',
    imageName,
    breadTopData[breadName].position[isSixInch ? 'sixInch' : 'footlong'],
    previewScale,
    100
  );
};

const createPreviewImage = (ingredientName, imageName, originalPosition, scale, order) => {
  const image = new Image();
  image.style.visibility = 'hidden';
  image.onload = () => {
    image.style.transform = `scale(${previewScale})`;
    image.style.left = originalPosition[0] === 'center'
      ? `${(previewContainer.clientWidth - image.clientWidth * previewScale) / 2}px`
      : `${originalPosition[0] * scale}px`;
    image.style.top = originalPosition[1] === 'center'
      ? `${(previewContainer.clientHeight - image.clientHeight * previewScale) / 2}px`
      : `${originalPosition[1] * scale}px`;
    image.style.visibility = 'visible';
  };
  image.src = `assets/img/${imageName}.svg`;
  image.setAttribute(INGREDIENT_NAME_ATTR, camelToSnake(ingredientName));
  image.setAttribute(ORDER_ATTR, order.toString());
  
  // Insert the image to the appropriate depth
  const inserted = Array.from(previewContainer.children).some(element => {
    if (parseInt(element.getAttribute(ORDER_ATTR)) > order) {
      previewContainer.insertBefore(image, element);
      return true;
    }
    return false;
  });
  if (!inserted) {
    previewContainer.append(image);
  }
};

const hideIngredientPreview = ingredient => {
  const ingredientNameAttr = camelToSnake(getItemName(ingredient));
  Array.from(previewContainer.children).forEach(element => {
    if (ingredientNameAttr === element.getAttribute(INGREDIENT_NAME_ATTR)) {
      element.remove();
    }
  });
};

const changePreviewBreadSize = (toSixInch) => {
  setPreviewContainerSize(toSixInch);
  const existingImages = Array.from(previewContainer.children);
  let previousIngredientName;
  existingImages.forEach(existingImage => {
    const ingredientName = snakeToCamel(existingImage.getAttribute(INGREDIENT_NAME_ATTR));
    if (previousIngredientName != ingredientName) { // Skip the replacement of already replaced ingredients
      const sectionName = getSectionName(ingredientName);
      const ingredient = menuData[sectionName][ingredientName];
      showIngredientPreview(ingredient, toSixInch);
      previousIngredientName = ingredientName;
    }
    existingImage.remove();
  });
};

// Initialize the preview
Object.keys(menuData).forEach(sectionName => {
  if (sectionName != 'breadSize') {
    Object.keys(menuData[sectionName]).forEach(ingredientName => {
      const ingredient = menuData[sectionName][ingredientName];
      if (ingredient.selected) {
        showIngredientPreview(ingredient, menuData.breadSize.sixInch.selected, false);
      }
    });
  }
});