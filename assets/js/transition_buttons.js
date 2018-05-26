/* global backButton */
/* global nextButton */

/* global questionContainers */
/* global selectionContainers */

/* global showBreadTopPreview */
/* global hideIngredientPreview */

let previousPageIndex = 0;
let currentPageIndex = 0;
const maxPageIndex = selectionContainers.length - 1;

const setBreadTopPreviewVisibility = () => {
  if (currentPageIndex === maxPageIndex) {
    showBreadTopPreview();
  }
  if (previousPageIndex === maxPageIndex) {
    hideIngredientPreview(null, true);
  }
};

backButton.addEventListener('click', () => {
  if (currentPageIndex === 0) {
    return;
  }
  
  // Move current page to the right
  selectionContainers[currentPageIndex].style.left = '100vw';
  questionContainers[currentPageIndex].style.left = '100vw';
  
  previousPageIndex = currentPageIndex--;
  
  // Bring current page in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // If this is the first page, disable the back button
  if (currentPageIndex === 0) {
    backButton.classList.add('disabled');
  }
  
  // If the previous page was the last page, enable the next button
  if (currentPageIndex + 1 === maxPageIndex) {
    nextButton.classList.remove('disabled');
  }
  
  setBreadTopPreviewVisibility();
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex === maxPageIndex) {
    return;
  }
  
  // Move current selection container to the left
  selectionContainers[currentPageIndex].style.left = '-100vw';
  questionContainers[currentPageIndex].style.left = '-100vw';
  
  previousPageIndex = currentPageIndex++;
  
  // Bring current selection container in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // If this is the last page, disable the next button
  if (currentPageIndex === maxPageIndex) {
    nextButton.classList.add('disabled');
  }
  
  // If the previous page was the first page, enable the back button
  if (currentPageIndex - 1 === 0) {
    backButton.classList.remove('disabled');
  }
  
  setBreadTopPreviewVisibility();
});