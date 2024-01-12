let bagItemObjects;
const CONVENIENCE_FEE=99;
onload();
function onload(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummery()
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
  bagItems= bagItems.filter(bagId =>  bagId != itemId );
  localStorage.setItem('bagItems',JSON.stringify(bagItems));

loadBagItemObjects()
displayBagItems();
displayBagIcon();
displayBagSummery();

}
function displayBagSummery(){
  let bagSummery= document.querySelector('.bag-summary');
  let totalItem =bagItemObjects.length;
  let totalMRP=0;
  let discount=0;
  let totalAmount=0;
  bagItemObjects.forEach(item=>{
    totalMRP += item.original_price;
    discount += item.original_price-item.current_price;
   totalAmount= totalMRP-discount +CONVENIENCE_FEE; 

  })
  bagSummery.innerHTML= `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (2 Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs ${totalMRP }</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${discount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs ${CONVENIENCE_FEE}</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${totalAmount}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`
}

// function displayBagSummery(){
//   let bagSummery= document.querySelector('.bag-summary');
//   // let totalAmount=${}
//   let innerHTML='';
//   bagItemObjects.forEach(item => {

//     innerHTML+=`<div class="bag-details-container">
//   <div class="price-header">PRICE DETAILS (2 Items) </div>
//   <div class="price-item">
//     <span class="price-item-tag">Total MRP</span>
//     <span class="price-item-value">Rs ${item.original_price}</span>
//   </div>
//   <div class="price-item">
//     <span class="price-item-tag">Discount on MRP</span>
//     <span class="price-item-value priceDetail-base-discount">-Rs${item.discount_percentage}</span>
//   </div>
//   <div class="price-item">
//     <span class="price-item-tag">Convenience Fee</span>
//     <span class="price-item-value">Rs 99</span>
//   </div>
//   <hr>
//   <div class="price-footer">
//     <span class="price-item-tag">Total Amount</span>
//     <span class="price-item-value">Rs 1240</span>
//   </div>
// </div>
// <button class="btn-place-order">
//   <div class="css-xjhrni">PLACE ORDER</div>
// </button>
// `;
// });
//   bagSummery.innerHTML= innerHTML;
// }
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