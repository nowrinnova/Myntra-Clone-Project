let bagItems;
onload();

function onload(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayElementsOfHomePage();
    displayBagIcon();
    
}


function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
}


function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}



function displayElementsOfHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    let innerHTML='';
    if (itemsContainerElement===null){
      return;
    }
    items.forEach(item => {
        innerHTML+=`<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item-picture">
    <div class="rating">
       ${item.rating.stars} ⭐ 5 | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}%OFF)</span>
    </div>
    <button class="btn-add-bag"  onclick="addToBag(${item.id})">Add to Cart</button>
    </div>`
        
    });
    
    itemsContainerElement.innerHTML=innerHTML;
}

