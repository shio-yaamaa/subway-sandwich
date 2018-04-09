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

const displayIngredient = (ingredient, isSixInch, isTop) => {
  const ingredientName = getItemName(ingredient);
  
  if (getSectionName(ingredientName) === 'bread') {
    const imageName = `${camelToSnake(ingredientName)}_${isSixInch ? 'six_inch' : 'footlong'}_${isTop ? 'top' : 'bottom'}`;
    displayPreviewImage(
      imageName,
      ingredient.position[isTop ? 'top' : 'bottom'][isSixInch ? 'six_inch' : 'footlong'],
      previewScale
    );
  } else {
    const imageName = camelToSnake(ingredientName);
    if (isSixInch) {
      displayPreviewImage(imageName, ingredient.position.six_inch, previewScale);
    } else {
      displayPreviewImage(imageName, ingredient.position.footlong[0], previewScale);
      displayPreviewImage(imageName, ingredient.position.footlong[1], previewScale);
    }
  }
};

const displayPreviewImage = (imageName, originalPosition, scale) => {
  const image = new Image();
  image.src = `assets/img/${imageName}.svg`;
  image.style.top = originalPosition[1] * scale + 'px';
  image.style.left = originalPosition[0] * scale + 'px';
  image.style.transform = `scale(${previewScale})`;
  previewContainer.append(image);
};

displayIngredient(menuData.bread.italian, true, false);
displayIngredient(menuData.meat.italianBmt, true);
displayIngredient(menuData.veggie.tomatoes, true);
displayIngredient(menuData.veggie.cucumbers, true);