/* global SIX_INCH_STANDARD_SIZE */
/* global FOOTLONG_STANDARD_SIZE */
/* global INGREDIENT_NAME_ATTR */
/* global ORDER_ATTR */

/* global ingredientData */
/* global breadTopData */

/* global camelToKebab */
/* global kebabToCamel */
/* global getItemName */
/* global getSectionName */

/* global middle */
/* global previewContainer */

let previewScale;

// TODO: take the definition of previewScale out of this function and put it in a new function which deals with window resize. It also need to change the size (scale) of preview images.
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
setPreviewContainerSize(ingredientData.breadSize.sixInch.selected);

const showIngredientPreview = (ingredient, isSixInch) => {
  const ingredientName = getItemName(ingredient);
  if (getSectionName(ingredientName) === 'bread') {
    const imageName = `${camelToKebab(ingredientName)}-${isSixInch ? 'six-inch' : 'footlong'}-bottom`;
    createPreviewImage(
      ingredientName, imageName, ['center', ingredient.position.y], true,
      ingredient.position.offset, previewScale, ingredient.order
    );
  } else {
    for (let i = 0; i < (isSixInch ? 1 : 2); i++) {
      const coordinates = [
        isSixInch
          ? 'center'
          : (FOOTLONG_STANDARD_SIZE[0] / 2 + ingredient.position.footlongDistance / 2), // The distance from the left or right edge stays the same while i changes
        ingredient.position.y
      ];
      createPreviewImage(
        ingredientName, camelToKebab(ingredientName), coordinates, i === 1,
        ingredient.position.offset, previewScale, ingredient.order
      );
    }
  }
};

const showBreadTopPreview = () => {
  const isSixInch = ingredientData.breadSize.sixInch.selected;
  const breadName = Object.keys(ingredientData.bread).reduce((accumulator, currentBreadName) => {
    return ingredientData.bread[currentBreadName].selected ? currentBreadName : accumulator;
  }, undefined);
  const imageName = `${camelToKebab(breadName)}-${isSixInch ? 'six-inch' : 'footlong'}-top`;
  createPreviewImage(
    'bread-top', imageName, ['center', breadTopData[breadName].position.y], true,
    breadTopData[breadName].position.offset, previewScale, 100
  );
};

// The x element of coordinates can be 'center'
// isAlignedLeft: Whether to set image.style.left. If false, image.style.right will set
const createPreviewImage = (ingredientName, imageName, coordinates, isAlignedLeft, offset, scale, order) => {
  const image = new Image();
  image.style.visibility = 'hidden';
  image.onload = () => {
    // Set horizontal position
    if (coordinates[0] === 'center') {
      image.style.transformOrigin = 'top center';
      image.style.left = `${(previewContainer.clientWidth - image.clientWidth + offset[0] * scale) / 2}px`;
    } else {
      if (isAlignedLeft) {
        image.style.transformOrigin = 'top left';
        image.style.left = `${(coordinates[0] + offset[0]) * scale}px`;
      } else {
        image.style.transformOrigin = 'top right';
        image.style.right = `${(coordinates[0] - offset[0]) * scale}px`;
      }
    }
    
    // Set vertical position
    image.style.top = `${(coordinates[1] + offset[1]) * scale}px`;
    
    image.style.transform = `scale(${scale})`;
    image.style.visibility = 'visible';
  };
  image.src = `assets/img/preview/${imageName}.svg`;
  image.setAttribute(INGREDIENT_NAME_ATTR, camelToKebab(ingredientName));
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

// If isBreadTop, ingredient can be null
const hideIngredientPreview = (ingredient, isBreadTop=false) => {
  const ingredientNameAttr = isBreadTop ? 'bread-top' : camelToKebab(getItemName(ingredient));
  Array.from(previewContainer.children).forEach(element => {
    if (element.getAttribute(INGREDIENT_NAME_ATTR) === ingredientNameAttr) {
      element.remove();
    }
  });
};

const changePreviewBreadSize = (toSixInch) => {
  setPreviewContainerSize(toSixInch);
  const existingImages = Array.from(previewContainer.children);
  let previousIngredientName;
  existingImages.forEach(existingImage => {
    const ingredientName = kebabToCamel(existingImage.getAttribute(INGREDIENT_NAME_ATTR));
    if (previousIngredientName != ingredientName) { // Skip the replacement of already replaced ingredients
      const sectionName = getSectionName(ingredientName);
      const ingredient = ingredientData[sectionName][ingredientName];
      showIngredientPreview(ingredient, toSixInch);
      previousIngredientName = ingredientName;
    }
    existingImage.remove();
  });
};

// Initialize the preview
Object.keys(ingredientData).forEach(sectionName => {
  if (sectionName != 'breadSize') {
    Object.keys(ingredientData[sectionName]).forEach(ingredientName => {
      const ingredient = ingredientData[sectionName][ingredientName];
      if (ingredient.selected) {
        showIngredientPreview(ingredient, ingredientData.breadSize.sixInch.selected, false);
      }
    });
  }
});