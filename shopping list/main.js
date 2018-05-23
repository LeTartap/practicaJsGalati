var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
//if( input.value !== ""){
adButton.addEventListener("click", AddItem);
//}

function AddItem()
{
    //var input = document.querySelector("#inputText");
    var returnedText = input.value;
    //console.log("am scris " + returnedText);

    var items = document.querySelector("#shopingList");
    var item = document.createElement("li");
    item.textContent = returnedText;
    items.appendChild(item);

    var localButton = document.createElement("button");
    localButton.setAttribute("id", "localButton");
    localButton.textContent = "Delete";
    item.appendChild(localButton);
    localButton.addEventListener("click", DeleteElement);
    input.value = "";

    //alert(returnedText);
}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted");
}
