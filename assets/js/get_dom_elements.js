const questionContainers = Array.from(document.getElementsByClassName('question-container'));

const middle = document.getElementById('middle');
const previewContainer = document.getElementById('preview-container');

const totalNutritionTds = Array.from(document.getElementById('total-nutrition').getElementsByTagName('tr'))
                               .map(tr => Array.from(tr.childNodes)[1]);

const selectionContainers = Array.from(document.getElementsByClassName('selection-container'));
const selectionItems = Array.from(document.getElementsByClassName('selection-item'));

const nutritionBalloon = document.getElementById('nutrition-balloon');
const nutritionBalloonTds = Array.from(nutritionBalloon.getElementsByTagName('tr'))
                                 .map(tr => Array.from(tr.childNodes)[1]);

const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');