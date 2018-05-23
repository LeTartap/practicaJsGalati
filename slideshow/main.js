var images = [
    { "src": "img1.jpg", "alt": "Nature" },
    { "src": "img2.jpg", "alt": "Fjords" }, 
    { "src": "img3.jpg", "alt": "Mountains" },
    { "src": "img4.jpg", "alt": "Lights" }
];


var defaultindex =1;
var nextbut = document.querySelector("#inainte");
var prevbut = document.querySelector("#inapoi");
var imagee = document.querySelector("#slide");
window.onload =showImages(defaultindex);
nextbut.addEventListener("click",function(){ChangeImage(++defaultindex)});
prevbut.addEventListener("click",function(){ChangeImage(--defaultindex)});

for (var i=0; i < images.length; i++)
{
    console.log(images[i].alt);
    console.log(images[i].src);
}


function ChangeImage(localindex)
{
    if(localindex ===images.length)
    {
        localindex=0;
    }
    else if(localindex ===-1)
    {
        localindex=images.length-1;
    }
    defaultindex = localindex;
    showImages(defaultindex);
}

function showImages(index)
{
    var image = document.querySelector("#slide");
    var src = images[index].src;// se declara elementul src caruia i se atribuie valoarea de element al obiect. images
    var alt = images[index].alt;
    image.src = src;
    image.alt = alt;
}
f
window.addEventListener("window", showImages(0));
document.getElementById("inainte");
