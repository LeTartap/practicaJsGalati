
fetch('http://thecatapi.com/api/images/get?format=xml')
.then(response => response.text())
.then(data => showCat(data));

fetch('http://thecatapi.com/api/images/get?format=html')
.then(response1 => response1.text())
.then(data1 => showCatHTML(data1));


function showCat(data)
{
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, "application/xml");    
    var sources = doc.getElementsByTagName("url");    

    console.log(sources[0].innerHTML);

    var imgrandom = document.createElement("img");
    imgrandom.src = sources[0].innerHTML;
    var src1 = document.getElementById("catpic");
    src1.appendChild(imgrandom);
    
}

function showCatHTML(data1)
{
    console.log(data1);
     var src1 = document.getElementById("catpichtml");
     src1.innerHTML = data1;
}
