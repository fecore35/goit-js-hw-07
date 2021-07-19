const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsElelements = document.querySelector('#ingredients');

const createListElement = arr => {
  return arr.map(el => {
    const listItem = document.createElement('li');
    listItem.textContent = el;
    return listItem;
  });
};
const ingredientsListItems = createListElement(ingredients);

ingredientsElelements.append(...ingredientsListItems);
