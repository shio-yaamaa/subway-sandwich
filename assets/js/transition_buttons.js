/* global backButton */
/* global nextButton */

/* global questionContainers */
/* global selectionContainers */

/* global showBreadTopPreview */
/* global hideIngredientPreview */

let previousPageIndex = 0;
let currentPageIndex = 0;
const maxPageIndex = selectionContainers.length - 1;

const movePages = isNextButtonClicked => {
  console.log(`${isNextButtonClicked ? '-' : ''}100vw`);
  
  // Move previous page out of the window
  selectionContainers[previousPageIndex].style.left = `${isNextButtonClicked ? '-' : ''}100vw`;
  questionContainers[previousPageIndex].style.left = `${isNextButtonClicked ? '-' : ''}100vw`;
  
  // Bring current page in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
};

const setButtonAvailability = () => {
  // Back button
  if (currentPageIndex === 0) {
    backButton.classList.add('disabled');
  } else if (previousPageIndex === 0) {
    backButton.classList.remove('disabled');
  }
  
  // Next button
  if (currentPageIndex === maxPageIndex) {
    nextButton.classList.add('disabled');
  } else if (previousPageIndex === maxPageIndex) {
    nextButton.classList.remove('disabled');
  }
};

const setBreadTopPreviewVisibility = () => {
  if (currentPageIndex === maxPageIndex) {
    showBreadTopPreview();
  }
  if (previousPageIndex === maxPageIndex) {
    hideIngredientPreview(null, true);
  }
};

backButton.addEventListener('click', () => {
  if (currentPageIndex === 0) { return; }
  
  previousPageIndex = currentPageIndex--;
  
  movePages(false);
  setButtonAvailability();
  setBreadTopPreviewVisibility();
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex === maxPageIndex) { return; }
  
  previousPageIndex = currentPageIndex++;
  
  movePages(true);
  setButtonAvailability();
  setBreadTopPreviewVisibility();
});