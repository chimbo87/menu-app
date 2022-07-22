var order_btn = document.querySelectorAll('.order_btn');
var remove_btn = document.querySelectorAll('#remove_btn');



for(i=0;i<order_btn.length;i++){
    var btn = order_btn[i];
    btn.addEventListener('click',showItems)
    
    
    
}

function showItems(e){
    var items = e.target.parentElement.parentElement;
    var dish_name= items.querySelectorAll('.dish_name')[0].innerText
    var dish_price= items.querySelectorAll('.dish_price')[0].innerText

    addToTable(dish_name, dish_price)
   }
   function addToTable(dish_name,dish_price){
    var tableIterms = document.createElement('div')
    var menu_right_bar= document.querySelector('.menu-right-bar')
    tableIterms.classList.add('cart_roll')

  
    cartRollContents = `
    <div class="dish-item">
    <td>${dish_name}</td>
</div>
<div class="qnty">
    <td ><input type="number" placeholder="1"></td>
</div>
<div>
    <td>${dish_price}</td>
</div>
<div id="remove_btn">
   <td><i class="fas fa-trash"></i></td>
</div>
    `
      menu_right_bar.append(tableIterms)
      tableIterms.innerHTML= cartRollContents;
};

for(i=0;i<remove_btn.length;i++){
    remove_btn[i].addEventListener('click',(e)=>{
       var removeBtn = e.target.parentElement.parentElement;
        removeBtn.remove();
        console.log(removeBtn)
    }) 
   

}
