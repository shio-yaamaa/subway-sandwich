/* global ingredientData */

// Utilities

/* global kebabToCamel */
/* global getIngredientDomElement */
/* global getIngredientName */
/* global getSectionName */
/* global getNutritionFacts */
/* global calculateTotalNutrition */
/* global multiplyNutrition */
/* global updateTotalNutrition */

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

// Add event listeners to the selection items

selectionItems.map(element => {
  const ingredientName = kebabToCamel(element.id);
  const sectionName = getSectionName(ingredientName);
  
  element.addEventListener('mouseenter', () => {
    // Update the nutrition balloon
    let nutritionFactsForBalloon;
    switch (sectionName) {
      case 'breadSize':
        nutritionFactsForBalloon = calculateTotalNutrition(ingredientName === 'sixInch', false);
        break;
      default: // bread, meat, cheese, sauce, veggie, side
        nutritionFactsForBalloon = multiplyNutrition(
          getNutritionFacts(ingredientName),
          ingredientData.breadSize.sixInch.selected
        );
        break;
    }
    for (let i = 0; i < nutritionBalloonTds.length; i++) {
      nutritionBalloonTds[i].textContent = nutritionFactsForBalloon[i];
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
    selectIngredient(ingredientData[sectionName][ingredientName]);
  });
});

const toggleSelectedness = (ingredient, selected) => {
  // Change the "selected" property in ingredientData
  ingredient.selected = selected;
  
  // Toggle the class of the DOM element
  if (selected) {
    getIngredientDomElement(ingredient).classList.add('selected');
  } else {
    getIngredientDomElement(ingredient).classList.remove('selected');
  }
};

const selectIngredient = ingredient => {
  const sectionName = getSectionName(ingredient);
  const ingredientName = getIngredientName(ingredient);
  if (ingredient.selected) { // The ingredient is already selected
    /* breadSize -> stay
       bread -> stay
       meat -> remove
       cheese -> remove
       sauce -> remove
       veggie -> remove
       side -> remove */
    if (sectionName === 'breadSize' || sectionName === 'bread') { // Stay
      return;
    } else { // Remove
      toggleSelectedness(ingredient, false);
      if (sectionName != 'side') {
        hideIngredientPreview(ingredient);
      }
    }
  } else {
    /* breadSize -> switch + change all the preview images
       bread -> switch
       meat -> switch
       cheese -> add
       sauce -> add
       veggie -> add
       side -> add */
    if (sectionName === 'breadSize') {
      toggleSelectedness(ingredientData.breadSize.sixInch, !ingredientData.breadSize.sixInch.selected);
      toggleSelectedness(ingredientData.breadSize.footlong, !ingredientData.breadSize.footlong.selected);
      changePreviewBreadSize(ingredientData.breadSize.sixInch.selected);
    } else if (sectionName === 'bread' || sectionName === 'meat') { // Switch
      Object.keys(ingredientData[sectionName]).forEach(currentIngredientName => {
        if (currentIngredientName === ingredientName) {
          toggleSelectedness(ingredientData[sectionName][currentIngredientName], true);
          showIngredientPreview(
            ingredientData[sectionName][currentIngredientName],
            ingredientData.breadSize.sixInch.selected,
            false
          );
        } else {
          toggleSelectedness(ingredientData[sectionName][currentIngredientName], false);
          hideIngredientPreview(ingredientData[sectionName][currentIngredientName]);
        }
      });
    } else { // Add
      toggleSelectedness(ingredient, true);
      if (sectionName != 'side') {
        showIngredientPreview(ingredient, ingredientData.breadSize.sixInch.selected);
      }
    }
  }
  
  // Update nutrition facts
  updateTotalNutrition();
};

updateTotalNutrition();