/* global menuData */

// Utilities

/* global snakeToCamel */
/* global getSectionName */
/* global getNutritionFacts */

// DOM Elements

/* global questionContainers */
/* global selectionContainers */
/* global selectionItems */
/* global nutritionBalloon */
/* global nutritionBalloonTds */

let currentPageIndex = 0;

// Add event listeners to the selection items

selectionItems.map(element => {
  element.addEventListener('mouseenter', () => {
    // update the nutrition information
    switch (getSectionName(snakeToCamel(element.id))) {
      case 'breadSize':
        console.log('its bread size');
        break;
      case 'toast':
        console.log('toast or not');
        break;
      default: // bread, meat, cheese, sauce, veggie
        const nutritionFacts = getNutritionFacts(snakeToCamel(element.id));
        for (let i = 0; i < nutritionBalloonTds.length; i++) {
          nutritionBalloonTds[i].textContent = nutritionFacts[i] * (menuData.breadSize.sixInch.selected ? 1 : 2);
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
});

// section: 'breadSize', 'bread', 'meat', ...
const select = (section, selection) => {
  // If the section only allows single choice, make all the options false
  switch (section) {
    case 'breadSize':
      break;
    case 'bread':
      break;
    case 'meat':
      break;
    case 'toast':
      break;
  }
  
  // Make the selected option true
  
  // Update the circle border
  
  // Update the preview

  // Update nutrition facts
  
  // Play SE
};