menuListArray = ["Pizza Vegetariana",//adicionar mais itens
  "Pizza Calabresa",
"Pizza de Mussarela",
"Pizza de Chocolate",
"Pizza de Presunto",
"Pizza de Pepperoni",                ];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i]+"<br>"
}
document.getElementById("displayMenu").innerHTML=htmldata
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
//Completar o código
menuListArray.sort();
htmldata="";
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+"<br>"
}
document.getElementById("displayMenu").innerHTML=htmldata
}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}