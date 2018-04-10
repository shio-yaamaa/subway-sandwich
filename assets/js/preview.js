/* global SIX_INCH_STANDARD_SIZE */
/* global FOOTLONG_STANDARD_SIZE */

/* global menuData */

/* global camelToSnake */
/* global getItemName */
/* global getSectionName */

/* global middle */
/* global previewContainer */

let previewScale;

// Set previewContainer size
// Must be executed after the change in sandwich size
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
}
setPreviewContainerSize(true);

const showIngredientPreview = (ingredient, isSixInch, isTop) => {
  const ingredientName = getItemName(ingredient);
  
  if (getSectionName(ingredientName) === 'bread') {
    const imageName = `${camelToSnake(ingredientName)}_${isSixInch ? 'six_inch' : 'footlong'}_${isTop ? 'top' : 'bottom'}`;
    createPreviewImage(
      ingredientName,
      imageName,
      ingredient.position[isTop ? 'top' : 'bottom'][isSixInch ? 'sixInch' : 'footlong'],
      previewScale,
      ingredient.order
    );
  } else {
    const imageName = camelToSnake(ingredientName);
    if (isSixInch) {
      createPreviewImage(ingredientName, imageName, ingredient.position.sixInch, previewScale, ingredient.order);
    } else {
      // The order is reversed to render the first half on the top
      createPreviewImage(ingredientName, imageName, ingredient.position.footlong[1], previewScale, ingredient.order);
      createPreviewImage(ingredientName, imageName, ingredient.position.footlong[0], previewScale, ingredient.order);
    }
  }
};

const createPreviewImage = (ingredientName, imageName, originalPosition, scale, order) => {
  const image = new Image();
  image.style.visibility = 'hidden';
  image.onload = () => {
    image.style.transform = `scale(${previewScale})`;
    
    // Set the image position
    // X
    if (originalPosition[0] === 'center') {
      image.style.left = `${(previewContainer.clientWidth - image.clientWidth * previewScale) / 2}px`;
    } else {
      image.style.left = `${originalPosition[0] * scale}px`;
    }
    
    // Y
    if (originalPosition[1] === 'center') {
      image.style.top = `${(previewContainer.clientHeight - image.clientHeight * previewScale) / 2}px`
    } else {
      image.style.top = `${originalPosition[1] * scale}px`;
    }
    image.style.visibility = 'visible';
  };
  image.src = `assets/img/${imageName}.svg`;
  image.classList.add(camelToSnake(ingredientName));
  image.setAttribute('data-order', order.toString());
  
  // Insert the image to the appropriate depth
  const inserted = Array.from(previewContainer.children).some(element => {
    if (parseInt(element.getAttribute('data-order')) > order) {
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
  const ingredientClass = camelToSnake(getItemName(ingredient));
  Array.from(previewContainer.children).forEach(element => {
    if (element.classList.contains(ingredientClass)) {
      element.remove();
    }
  });
};

showIngredientPreview(menuData.bread.italian, true, true);