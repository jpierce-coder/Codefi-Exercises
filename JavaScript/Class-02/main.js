// Class Notes and Typing Along


let menuItems = [
  { name: 'Pepperoni Pizza'},
  { name: 'Supreme'},
  { name: 'Cheese'},
];

let menuList = document.getElementById('menu-list');

for(let i = 0; i < menuItems.length; i++) {
    let itemElem = document.createElement('li');
    itemElem.innerText = menuItems[i].name;
    if(menuItems[i].name === 'Supreme') {
        itemElem.style.color = 'green';
    } else if (menuItems[i].name === 'Cheese') {
        itemElem.style.fontSize = '50px'
    }
    menuList.appendChild(itemElem)
}