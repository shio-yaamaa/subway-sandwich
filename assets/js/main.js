/* global menuData */

// Utilities

/* global snakeToCamel */
/* global getItemName */
/* global getSectionName */
/* global getNutritionFacts */
/* global multiplyNutrition */
/* global updateNutritionFacts */

// DOM Elements

/* global questionContainers */
/* global selectionContainers */
/* global selectionItems */
/* global nutritionBalloon */
/* global nutritionBalloonTds */

// Preview

/* global showIngredientPreview */
/* global hideIngredientPreview */
/* global changePreviewBreadSize */

let currentPageIndex = 0;

// Add event listeners to the selection items

selectionItems.map(element => {
  const ingredientName = snakeToCamel(element.id);
  const sectionName = getSectionName(ingredientName);
  
  element.addEventListener('mouseenter', () => {
    // update the nutrition information
    switch (sectionName) {
      case 'breadSize':
        break;
      default: // bread, meat, cheese, sauce, veggie
        const nutritionFacts = multiplyNutrition(
          getNutritionFacts(snakeToCamel(element.id)),
          menuData.breadSize.sixInch.selected ? 1 : 2
        );
        for (let i = 0; i < nutritionBalloonTds.length; i++) {
          nutritionBalloonTds[i].textContent = nutritionFacts[i];
        }
    }
    
    // Move and show the balloon
    const elementRect = element.getBoundingClientRect();
    const nutritionBalloonRect = nutritionBalloon.getBoundingClientRect();
    const containerRect = nutritionBalloon.parentElement.getBoundingClientRect();
    nutritionBalloon.style.left = `${elementRect.left + (elementRect.width - nutritionBalloonRect.width) / 2}px`;
    nutritionBalloon.style.top = `${elementRect.top - nutritionBalloonRect.height - containerRect.top}px`;
    nutritionBalloon.style.opacity = 1;
  });
  
  element.addEventListener('mouseleave', () => {
    nutritionBalloon.style.opacity = 0;
  })
  
  element.addEventListener('click', () => {
    selectIngredient(menuData[sectionName][ingredientName]);
  });
});

const selectIngredient = ingredient => {
  const sectionName = getSectionName(ingredient);
  const ingredientName = getItemName(ingredient);
  if (ingredient.selected) { // the ingredient is already selected
    /* breadSize -> stay
       bread -> stay
       meat -> remove
       cheese -> remove
       sauce -> remove
       veggie -> remove */
    if (sectionName === 'breadSize' || sectionName === 'bread') { // stay
      return;
    } else { // remove
      ingredient.selected = false;
      hideIngredientPreview(ingredient);
    }
  } else {
    /* breadSize -> switch + change all the preview images
       bread -> switch
       meat -> switch
       cheese -> add
       sauce -> add
       veggie -> add */
    if (sectionName === 'breadSize') {
      menuData.breadSize.sixInch.selected = !menuData.breadSize.sixInch.selected;
      menuData.breadSize.footlong.selected = !menuData.breadSize.footlong.selected;
      changePreviewBreadSize(menuData.breadSize.sixInch.selected);
    } else if (sectionName === 'bread' || sectionName === 'meat') { // switch
      Object.keys(menuData[sectionName]).forEach(currentIngredientName => {
        if (currentIngredientName === ingredientName) {
          menuData[sectionName][currentIngredientName].selected = true;
          showIngredientPreview(
            menuData[sectionName][currentIngredientName],
            menuData.breadSize.sixInch.selected,
            false
          );
        } else {
          menuData[sectionName][currentIngredientName].selected = false;
          hideIngredientPreview(menuData[sectionName][currentIngredientName]);
        }
      });
    } else { // add
      ingredient.selected = true;
      showIngredientPreview(ingredient, menuData.breadSize.sixInch.selected);
    }
  }
  
  // Update the circle border color

  // Update nutrition facts
  updateNutritionFacts();
};