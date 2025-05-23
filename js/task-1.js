const itemList = document.querySelector('#categories');
const item = itemList.querySelectorAll('.item');

console.log("Number of categories: " + item.length);

item.forEach(items => {

console.log("Category: " + items.querySelector('h2').textContent);
console.log("Elements: " + items.querySelectorAll('ul li').length);


});
