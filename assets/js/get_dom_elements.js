const questionContainers = [
  document.getElementById('bread_question_container'),
  document.getElementById('meat_question_container'),
  document.getElementById('cheese_question_container'),
  document.getElementById('sauce_question_container'),
  document.getElementById('veggie_question_container')
];

const middle = document.getElementById('middle');
const previewContainer = document.getElementById('preview_container');

const selectionContainers = [ /* 名前使うようだったら一つ一つの要素をobjectにしてnameとdomを作る */
  document.getElementById('bread_selection_container'),
  document.getElementById('meat_selection_container'),
  document.getElementById('cheese_selection_container'),
  document.getElementById('sauce_selection_container'),
  document.getElementById('veggie_selection_container')
];

const selectionItems = Array.from(document.getElementsByClassName('selection_item'));

const nutritionBalloon = document.getElementById('nutrition_balloon');
const nutritionBalloonTds = Array.from(nutritionBalloon.getElementsByTagName('tr'))
                                 .map(tr => Array.from(tr.childNodes)[1]);

const backButton = document.getElementById('back_button');
const nextButton = document.getElementById('next_button');