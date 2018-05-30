var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
var tempText;
var canEdit = true;

adButton.addEventListener("click", AddItem);


function AddItem()
{
    if(input.value !== ""){
    var returnedText = input.value;
    
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
    editButton.addEventListener("click", EditElement);
    canEdit = true;
    }
    //alert(returnedText);
}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted!!!");
}

function EditElement(){
    //asigura ca nu se apasa de mai multe ori pe buton
    if(canEdit){
        var parent = this.parentNode;
        var input = document.createElement("input");
        console.log(parent.firstChild);

        tempText = parent.firstChild.textContent;//stochez intr-o variabila globala textul primului element din lista(de tip text)
        console.log(tempText);

        //dezactivez primul nod din elementul html li
        //parent.removeChild(parent.firstChild);   
        parent.firstChild.textContent = "";

        //adaug eventListenerul pe html element Input
        input.addEventListener("keyup", keyCheck);

        //inserez elementul nou creat (inputul)
        parent.insertBefore(input, parent.firstChild);
        input.value = tempText; //se atribuie tagului value al elemetului input valoarea stocata a "var tempText"
        canEdit = false;
    }
}

function keyCheck(e){
    if(e.key ==="Enter"){
        console.log(e.key + " was pressed");
        var savedText = this.value;//se salveaza textul din input
        this.style.display = "none"; //se dezactiveaza inputul
        var insertedText = document.createElement("text");//creez un nou element html de tip text
        //inserez elementul nou creat
        var parent  = this.parentNode;
        parent.insertBefore(insertedText, parent.firstChild);
        insertedText.textContent = savedText;//se atribuie textul inputului
    }
}
