/* global backButton */
/* global nextButton */

/* global questionContainers */
/* global selectionContainers */

let currentPageIndex = 0;

backButton.addEventListener('click', () => {
  if (currentPageIndex === 0) {
    return;
  }
  
  // Move current page to the right
  selectionContainers[currentPageIndex].style.left = '100vw';
  questionContainers[currentPageIndex].style.left = '100vw';
  
  currentPageIndex--;
  
  // Bring current page in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // If this is the first page, disable the back button
  if (currentPageIndex === 0) {
    backButton.classList.add('disabled');
  }
  
  // If the previous page was the last page, enable the next button
  if (currentPageIndex + 1 === selectionContainers.length - 1) {
    nextButton.classList.remove('disabled');
  }
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex === selectionContainers.length - 1) {
    return;
  }
  
  // Move current selection container to the left
  selectionContainers[currentPageIndex].style.left = '-100vw';
  questionContainers[currentPageIndex].style.left = '-100vw';
  
  currentPageIndex++;
  
  // Bring current selection container in the window
  selectionContainers[currentPageIndex].style.left = '0';
  questionContainers[currentPageIndex].style.left = '0';
  
  // If this is the last page, disable the next button
  if (currentPageIndex === selectionContainers.length - 1) {
    nextButton.classList.add('disabled');
  }
  
  // If the previous page was the first page, enable the back button
  if (currentPageIndex - 1 === 0) {
    backButton.classList.remove('disabled');
  }
});