/* global SIX_INCH_STANDARD_SIZE */
/* global FOOTLONG_STANDARD_SIZE */
/* global INGREDIENT_NAME_ATTR */

/* global ingredientData */
/* global breadTopData */

/* global camelToKebab */
/* global kebabToCamel */
/* global getIngredientName */
/* global getSectionName */

/* global middle */
/* global previewContainer */

let previewScale;
const previewImages = []; // {ingredient, domElement, coordinates, isAlignedLeft, layer}

// Returns if previewScale has changed
const setPreviewContainerSize = (isSixInch) => {
  const previousPreviewScale = previewScale;
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
  
  return previewScale != previousPreviewScale;
};
setPreviewContainerSize(ingredientData.breadSize.sixInch.selected);

const showIngredientPreview = (ingredient, isSixInch) => {
  const ingredientName = getIngredientName(ingredient);
  if (getSectionName(ingredient) === 'bread') {
    const imageName = `${camelToKebab(ingredientName)}-${isSixInch ? 'six-inch' : 'footlong'}-bottom`;
    createPreviewImage(
      ingredient, imageName,
      ['center', ingredient.position.y], true, previewScale, ingredient.layer
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
        ingredient, camelToKebab(ingredientName),
        coordinates, i === 1, previewScale, ingredient.layer
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
    breadTopData[breadName], imageName,
    ['center', breadTopData[breadName].position.y], true, previewScale, 100
  );
};

// The x element of coordinates can be 'center'
// isAlignedLeft: Whether to set image.style.left. If false, image.style.right will be set
const createPreviewImage = (ingredient, imageName, coordinates, isAlignedLeft, scale, layer) => {
  const image = new Image();
  image.style.visibility = 'hidden';
  image.onload = () => {
    setPreviewImagePositionAndScale(image, coordinates, isAlignedLeft, ingredient.position.offset, scale);
    image.style.visibility = 'visible';
  };
  image.src = `assets/img/preview/${imageName}.svg`;
  
  // Insert the image to the appropriate layer
  const previewImageObject = {
    ingredient: ingredient,
    domElement: image,
    coordinates: coordinates,
    isAlignedLeft: isAlignedLeft,
    layer: layer
  };
  const isInserted = previewImages.some((previewImage, index) => {
    if (previewImage.layer > layer) {
      previewContainer.insertBefore(image, previewImage.domElement);
      previewImages.splice(index, 0, previewImageObject);
      return true;
    }
    return false;
  });
  if (!isInserted) {
    previewContainer.append(image);
    previewImages.push(previewImageObject);
  }
};

const hideIngredientPreview = ingredient => { // There might be multiple preview images that represent this ingredient
  for (let i = previewImages.length - 1; i >= 0; i--) {
    if (previewImages[i].ingredient == ingredient) {
      previewImages[i].domElement.remove();
      previewImages.splice(i, 1);
    }
  }
};

const hideBreadTopPreview = () => {
  const breadName = Object.keys(ingredientData.bread).reduce((accumulator, currentBreadName) => {
    return ingredientData.bread[currentBreadName].selected ? currentBreadName : accumulator;
  }, undefined);
  hideIngredientPreview(breadTopData[breadName]);
};

// Used when creating images and updating them upon window resizing
const setPreviewImagePositionAndScale = (imageElement, coordinates, isAlignedLeft, offset, scale) => {
  // Set horizontal position
  if (coordinates[0] === 'center') {
    imageElement.style.transformOrigin = 'top center';
    imageElement.style.left = `${(previewContainer.clientWidth - imageElement.clientWidth + offset[0] * scale) / 2}px`;
  } else {
    if (isAlignedLeft) {
      imageElement.style.transformOrigin = 'top left';
      imageElement.style.left = `${(coordinates[0] + offset[0]) * scale}px`;
    } else {
      imageElement.style.transformOrigin = 'top right';
      imageElement.style.right = `${(coordinates[0] - offset[0]) * scale}px`;
    }
  }
  
  // Set vertical position
  imageElement.style.top = `${(coordinates[1] + offset[1]) * scale}px`;
  
  // Set scale
  imageElement.style.transform = `scale(${scale})`;
};

const changePreviewBreadSize = toSixInch => {
  setPreviewContainerSize();
  
  const existingPreviewImages = previewImages.slice(); // Create a copy of previewImages because previewImages will be affected by index
  let previousIngredient;
  existingPreviewImages.forEach(existingPreviewImage => {
    if (existingPreviewImage.ingredient != previousIngredient) { // If the current ingredient differs from the previous one, create a new preview image
      showIngredientPreview(existingPreviewImage.ingredient, toSixInch);
    }
    previousIngredient = existingPreviewImage.ingredient;
    
    // Remove the existing preview image
    existingPreviewImage.domElement.remove();
    previewImages.splice(previewImages.indexOf(existingPreviewImage), 1);
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

// Add window resize event listener
window.addEventListener('resize', () => {
  const didPreviewScaleChange = setPreviewContainerSize(ingredientData.breadSize.sixInch.selected);
  
  // Update the size of the ingredient preview images
  if (didPreviewScaleChange) {
    previewImages.forEach(previewImage => {
      setPreviewImagePositionAndScale(
        previewImage.domElement,
        previewImage.coordinates, previewImage.isAlignedLeft, previewImage.ingredient.position.offset,
        previewScale
      );
    });
  }
});