/* global snakeToCamel */
/* global getNutritionFacts */

let currentPageIndex = 0;

const questionContainers = [
  document.getElementById('bread_question_container'),
  document.getElementById('meat_question_container'),
  document.getElementById('cheese_question_container'),
  document.getElementById('toast_question_container'),
  document.getElementById('sauce_question_container'),
  document.getElementById('veggie_question_container')
];

const selectionContainers = [ /* 名前使うようだったら一つ一つの要素をobjectにしてnameとdomを作る */
  document.getElementById('bread_selection_container'),
  document.getElementById('meat_selection_container'),
  document.getElementById('cheese_selection_container'),
  document.getElementById('toast_selection_container'),
  document.getElementById('sauce_selection_container'),
  document.getElementById('veggie_selection_container')
];

const selectionItems = Array.from(document.getElementsByClassName('selection_item'));

const nutritionBalloon = document.getElementById('nutrition_balloon');
const nutritionBalloonTds = Array.from(nutritionBalloon.getElementsByTagName('tr'))
                                 .map(tr => Array.from(tr.childNodes)[1]);

// add event listeners to the selection items

selectionItems.map(element => {
  element.addEventListener('mouseenter', () => {
    // update the nutrition information
    const nutritionFacts = getNutritionFacts(snakeToCamel(element.id));
    for (let i = 0; i < nutritionBalloonTds.length; i++) {
      nutritionBalloonTds[i].textContent = nutritionFacts[i];
    }
    
    // move and show the balloon
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

const backButton = document.getElementById('back_button');
const nextButton = document.getElementById('next_button');

backButton.addEventListener('click', () => {
  if (currentPageIndex === 0) {
    return;
  }
  
  // move current page to the right
  selectionContainers[currentPageIndex].style.left = '100vw';
  questionContainers[currentPageIndex].style.left = '100vw';
  
  currentPageIndex--;
  
  // bring current page in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // if this is the first page, disable the back button
  if (currentPageIndex === 0) {
    backButton.classList.add('disabled');
  }
  
  // if the previous page was the last page, enable the next button
  if (currentPageIndex + 1 === selectionContainers.length - 1) {
    nextButton.classList.remove('disabled');
  }
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex === selectionContainers.length - 1) {
    return;
  }
  
  // move current selection container to the left
  selectionContainers[currentPageIndex].style.left = '-100vw';
  questionContainers[currentPageIndex].style.left = '-100vw';
  
  currentPageIndex++;
  
  // bring current selection container in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // if this is the last page, disable the next button
  if (currentPageIndex === selectionContainers.length - 1) {
    nextButton.classList.add('disabled');
  }
  
  // if the previous page was the first page, enable the back button
  if (currentPageIndex - 1 === 0) {
    backButton.classList.remove('disabled');
  }
});

// section: 'breadSize', 'bread', 'meat', ...
const select = (section, selection) => {
  // if the section only allows single choice, make all the options false
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
  
  // make the selected option true
  
  // update the circle border
  
  // update the preview

  // update nutrition facts
  
  // play SE
};