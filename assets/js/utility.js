/* global ingredientData */
/* global totalNutritionTds */

const kebabToCamel = kebab => kebab.replace(/(\-\w)/g, m => m[1].toUpperCase());
const camelToKebab = camel => camel.split(/(?=[A-Z])/).join('-').toLowerCase();

// Returns the DOM element of the thumbnail button corresponding to the given ingredient
// ingredient can be either the ingredient name or the ingredient object
const getIngredientDomElement = ingredient => {
  const ingredientName = typeof ingredient === 'string' ? ingredient : getIngredientName(ingredient);
  const id = camelToKebab(ingredientName);
  return document.getElementById(id);
};

// Obtain ingredient name from the ingredient object
const getIngredientName = object => {
  let ingredientName;
  Object.keys(ingredientData).forEach(currentSectionName => {
    Object.keys(ingredientData[currentSectionName]).forEach(currentIngredientName => {
      if (ingredientData[currentSectionName][currentIngredientName] === object) {
        ingredientName = currentIngredientName;
      }
    });
  });
  return ingredientName;
};

// ingredient can be either the ingredient name or the ingredient object
const getSectionName = ingredient => {
  const isStringGiven = typeof ingredient === 'string';
	let sectionName;
	Object.keys(ingredientData).forEach(currentSectionName => {
  	if (isStringGiven && ingredientData[currentSectionName].hasOwnProperty(ingredient)) {
    	sectionName = currentSectionName;
    } else if (!isStringGiven && Object.keys(ingredientData[currentSectionName]).reduce((accumulator, currentIngredientKey) => {
      return accumulator || ingredientData[currentSectionName][currentIngredientKey] === ingredient;
    }, false)) {
      sectionName = currentSectionName;
    }
  });
  return sectionName;
};

// ingredient can be either the ingredient name or the ingredient object
const getNutritionFacts = ingredient => {
  return typeof ingredient === 'string'
    ? ingredientData[getSectionName(ingredient)][ingredient].nutrition
    : ingredient.nutrition;
};

const calculateTotalNutrition = (isSixInch, includeSides=true) => {
  let sixInchNutrition = [0, 0, 0, 0, 0];
  
  // Add all the ingredients except sides
  Object.keys(ingredientData).forEach(currentSectionName => {
    if (currentSectionName === 'breadSize' || currentSectionName === 'side') {
      return;
    }
    Object.keys(ingredientData[currentSectionName]).forEach(currentIngredientName => {
      if (ingredientData[currentSectionName][currentIngredientName].selected) {
        sixInchNutrition = sixInchNutrition.map((element, index) => {
          return element + ingredientData[currentSectionName][currentIngredientName].nutrition[index];
        });
      }
    });
  });
  
  const multipliedNutrition = multiplyNutrition(sixInchNutrition, isSixInch);
  let totalNutrition = multipliedNutrition;
  
  // Add sides if includeSides
  if (includeSides) {
    Object.keys(ingredientData.side).forEach(currentSideName => {
      if (ingredientData.side[currentSideName].selected) {
        totalNutrition = totalNutrition.map((element, index) => {
          return element + ingredientData.side[currentSideName].nutrition[index];
        });
      }
    });
  }
  
  return totalNutrition;
};

const multiplyNutrition = (originalNutrition, isSixInch) => {
  return originalNutrition.map(element => element * (isSixInch ? 1 : 2));
}

const updateTotalNutrition = () => {
  const totalNutrition = calculateTotalNutrition(ingredientData.breadSize.sixInch.selected);
  for (let i = 0; i < totalNutritionTds.length; i++) {
    totalNutritionTds[i].textContent = totalNutrition[i];
  }
};