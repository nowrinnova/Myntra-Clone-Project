let bagItems;
onload();
 
function onload(){
    let bagItemStr= localStorage.getItem('bagItems');
    bagItems= bagItemStr ? JSON.parse(bagItemStr) : [];
    displayElementsOfHomePage();
    displayBagIcon();
   
}
function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
}

function displayBagIcon(){
    let bagItemElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0)
    {   bagItemElement.style.visibility='visible';
        bagItemElement.innerText=bagItems.length;}
    else{bagItemElement.style.visibility='hidden';}
      
}

function displayElementsOfHomePage(){
let itemsContainerElement =document.querySelector(".items-container");
if (itemsContainerElement==null){
    return ;
}
let innerHTML='';
items.forEach(item => {
    innerHTML+=`
    <div class="item-container">
        <img class="item-img" src="${item.image}" alt="picture">
        <div class="rating">${item.rating.stars} ⭐ ${item.rating.count}k</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">₹ ${item.current_price}</span>
            <span class="orginal-price">₹ ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    
    </div>`
    
});
itemsContainerElement.innerHTML=innerHTML;}

