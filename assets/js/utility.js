/* global menuData */

const snakeToCamel = snake => snake.replace(/(\_\w)/g, m => m[1].toUpperCase());
const camelToSnake = camel => camel.split(/(?=[A-Z])/).join('_').toLowerCase();

// Obtain item name from the item object
const getItemName = object => {
  let itemName;
  Object.keys(menuData).forEach(currentSectionName => {
    Object.keys(menuData[currentSectionName]).forEach(currentItemName => {
      if (menuData[currentSectionName][currentItemName] === object) {
        itemName = currentItemName;
      }
    });
  });
  return itemName;
};

// item can be both the item name and the item object
const getSectionName = item => {
  const isStringGiven = typeof item === 'string';
	let sectionName;
	Object.keys(menuData).forEach(currentSectionName => {
  	if (isStringGiven && menuData[currentSectionName].hasOwnProperty(item)) {
    	sectionName = currentSectionName;
    } else if (!isStringGiven && Object.keys(menuData[currentSectionName]).reduce((accumulator, currentItemKey) => {
      return accumulator || menuData[currentSectionName][currentItemKey] === item;
    }, false)) {
      sectionName = currentSectionName;
    }
  });
  return sectionName;
};

// item can be both the item name and the item object
const getNutritionFacts = item => {
  return typeof item === 'string'
    ? menuData[getSectionName(item)][item].nutrition
    : item.nutrition;
};

const computeTotalNutrition = () => {
  const sixInchNutrition = [0, 0, 0, 0, 0];
  
  return multiplyNutrition(sixInchNutrition, menuData.breadSize.sixInch.selected ? 1 : 2);
};

const addNutrition = (nutrition1, nutrition2) => {
  return nutrition1.map((element, index) => element + nutrition2[index]);
};

const multiplyNutrition = (nutrition, scalar) => {
  return nutrition.map(element => element * scalar);
};

const updateNutritionFacts = () => {
  const totalNutrition = computeTotalNutrition();
  
};