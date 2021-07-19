const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`В списке ${categoriesList.childElementCount} категории.`);

[...categoriesItems].forEach(el => {
  console.log(
    `Категория: ${el.querySelector('h2').textContent} \nКоличество элементов: ${
      el.lastElementChild.childElementCount
    }`,
  );
});
