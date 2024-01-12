let bagItemObjects;
onload();
function onload(){
    loadBagItemObjects();
    displayBagItems();
}
function loadBagItemObjects(){
    bagItemObjects = bagItems.map(itemId =>{
        for ( let i=0 ;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    })
}
function removeFromBag(itemId){
  // bagItemObjects.pop(bagItem);
  bagItems= bagItems.filter(bagId => { bagId !== itemId });
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
loadBagItemObjects()
displayBagItems();
displayBagIcon();
}

function generateItemHTML(item){
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">14 days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">10 Oct 2023</span>
      </div>
    </div>
    
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
}

function displayBagItems(){
let containerElement= document.querySelector('.bag-items-container')
let innerHTML ='';
bagItemObjects.forEach(bagItem => {

    innerHTML+=generateItemHTML(bagItem);
});
containerElement.innerHTML=innerHTML;
}