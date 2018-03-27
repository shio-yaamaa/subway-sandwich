/* global menuData */

const snakeToCamel = snake => {
  return snake.replace(
    /(\_\w)/g,
    m => m[1].toUpperCase()
  );
};

const getSectionName = itemName => {
	let sectionName = null;
	Object.keys(menuData).forEach(element => {
  	if (menuData[element].hasOwnProperty(itemName)) {
    	sectionName = element;
    }
  });
  return sectionName;
};

const getNutritionFacts = itemName => {
  return menuData[getSectionName(itemName)][itemName].nutrition;
};

const calculateTotalNutrition = () => {
  let sixInchNutrition = [0, 0, 0, 0, 0]
};