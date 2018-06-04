var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
var tempText;
var finalList = [];

adButton.addEventListener("click", AddItem);


function AddItem()
{
    if(input.value !== ""){
    //var input = document.querySelector("#inputText");
    var returnedText = input.value;
    //console.log("am scris " + returnedText);

    var shoppingList = document.querySelector("#shopingList");
    var shoppingItem = document.createElement("li");
    shoppingItem.textContent = returnedText;
    shoppingList.appendChild(shoppingItem);

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "localButton");
    deleteButton.textContent = "Delete";
    shoppingItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", DeleteElement);
    input.value = "";

    var editButton = document.createElement("button");
    editButton.setAttribute("id","localButton");
    editButton.textContent = "Edit";
    shoppingItem.appendChild(editButton);
    editButton.addEventListener("click", createEditfunction());

    var submitButton = document.createElement("button");
    submitButton.setAttribute("id","localButton");
    submitButton.textContent = "Submit";
    shoppingItem.appendChild(submitButton);
    submitButton.addEventListener("click",submitElement);

    }
    //alert(returnedText);
}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted!!!");
}
function createEditfunction()
{
    var canEdit = true;
    return function(){
        //permite apasarea butonului de Edit o singura data
        if(canEdit){
            var parent = this.parentNode;
            var input = document.createElement("input");
            console.log(parent.firstChild);
    
            tempText = parent.firstChild.textContent;
            //se retine global primul element din lista
            console.log(tempText);
    
            //se dezactiveaza primul nod din HTML <li>
            //parent.removeChild(parent.firstChild);   
            parent.firstChild.textContent = "";
    
            //se adauga eventListener-ul pe HTML element Input
            input.addEventListener("keyup", keyCheck);
    
            //inserez elementul nou creat
            parent.insertBefore(input, parent.firstChild);
            //se atribuie tagului value al elementului input, valoarea stocata a "var tempText"
            input.value = tempText;
            canEdit=false;
        }
    }    
}


function submitElement()
{
    var parent = this.parentNode;
    //alert(parent.firstChild.textContent);
    finalList.push(parent.firstChild.textContent);
    console.log(finalList[0]);
    console.log(finalList[1]);

}

function keyCheck(e){
    if(e.key ==="Enter")
    {
        console.log(e.key + " was pressed");
        //salvez textul din input
        var savedText = this.value;
        //dezactivez inputul
        this.style.display = "none";
        //creez un nou element html de tip text
        var insertedText = document.createElement("text");
        //inserez elementul nou creat
        var parent  = this.parentNode;
        parent.insertBefore(insertedText, parent.firstChild);
        //ii atribui textul inputului
        insertedText.textContent = savedText;
    }
}