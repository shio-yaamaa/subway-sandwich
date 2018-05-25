/* global ingredientData */
/* global totalNutritionTds */

const kebabToCamel = kebab => kebab.replace(/(\-\w)/g, m => m[1].toUpperCase());
const camelToKebab = camel => camel.split(/(?=[A-Z])/).join('-').toLowerCase();

// Returns the DOM element of the thumbnail button corresponding to the given item
// item can be either the item name or the item object
const getItemDomElement = item => {
  const itemName = typeof item === 'string' ? item : getItemName(item);
  const id = camelToKebab(itemName);
  return document.getElementById(id);
};

// Obtain item name from the item object
const getItemName = object => {
  let itemName;
  Object.keys(ingredientData).forEach(currentSectionName => {
    Object.keys(ingredientData[currentSectionName]).forEach(currentItemName => {
      if (ingredientData[currentSectionName][currentItemName] === object) {
        itemName = currentItemName;
      }
    });
  });
  return itemName;
};

// item can be either the item name or the item object
const getSectionName = item => {
  const isStringGiven = typeof item === 'string';
	let sectionName;
	Object.keys(ingredientData).forEach(currentSectionName => {
  	if (isStringGiven && ingredientData[currentSectionName].hasOwnProperty(item)) {
    	sectionName = currentSectionName;
    } else if (!isStringGiven && Object.keys(ingredientData[currentSectionName]).reduce((accumulator, currentItemKey) => {
      return accumulator || ingredientData[currentSectionName][currentItemKey] === item;
    }, false)) {
      sectionName = currentSectionName;
    }
  });
  return sectionName;
};

// item can be either the item name or the item object
const getNutritionFacts = item => {
  return typeof item === 'string'
    ? ingredientData[getSectionName(item)][item].nutrition
    : item.nutrition;
};

const computeTotalNutrition = (ignoreBreadSize=false) => {
  let sixInchNutrition = [0, 0, 0, 0, 0];
  Object.keys(ingredientData).forEach(currentSectionName => {
    if (currentSectionName === 'breadSize') {
      return;
    }
    Object.keys(ingredientData[currentSectionName]).forEach(currentItemName => {
      if (ingredientData[currentSectionName][currentItemName].selected) {
        sixInchNutrition = sixInchNutrition.map((element, index) => {
          return element + ingredientData[currentSectionName][currentItemName].nutrition[index];
        });
      }
    });
  });
  return multiplyNutrition(sixInchNutrition, ingredientData.breadSize.sixInch.selected ? 1 : 2);
};

const multiplyNutrition = (originalNutrition, scalar) => {
  return originalNutrition.map(element => element * scalar);
};

const addNutrition = (nutrition1, nutrition2) => {
  return nutrition1.map((element, index) => element + nutrition2[index]);
};

const updateTotalNutrition = () => {
  const totalNutrition = computeTotalNutrition();
  for (let i = 0; i < totalNutritionTds.length; i++) {
    totalNutritionTds[i].textContent = totalNutrition[i];
  }
};