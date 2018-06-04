var a = document.getElementById("word")


 a.addEventListener("focus",  function()
 {
     this.style.backgroundColor = "yellow";
 })
 a.addEventListener("focusout", function()
 {
     var str = this.value;
     var rstr = str.toUpperCase();
     this.value= rstr;
 })
 document.querySelector("#b1").addEventListener("click", function()
 {
    changeColor(a.value, this);
    
 }
)
function changeColor(culoare, element)
 {
    element.style.color = culoare;
 }
 document.querySelector("#b1").addEventListener("click", makeNumber(document.querySelector("input")));
 document.querySelector("select").addEventListener("change",function()
{
    var dropdown = document.querySelector("#s1");
    var newbut = document.querySelector("#bt1").value;
    changeColor(dropdown[selectedIndex],newbut);
})
 function makeNumber(element)
 {
    var i =0;
    return function ()
    {
     element.value+=i;
     i++;
    }
 }