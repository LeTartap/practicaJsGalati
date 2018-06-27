
fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
.then(response => response.text())
.then(data => showCat(data));

function showCat(data){
// The DOMParser interface provides the ability to parse XML or HTML source code 
// from a string into a DOM Document.
var parser = new DOMParser();
// transforma XML-ul primit de la API intr-un obiect similar DOM-ului
var doc = parser.parseFromString(data, "application/xml");
// obtine referintele la tag-urile <url> din XML intr-un HTML Collection (un obiect array-like)    
var sources = doc.getElementsByTagName("url");

Array.from(sources).forEach(item => { // ce se intampla aici? :)
    var img = document.createElement('img');
    img.src = item.innerHTML;        
    document.body.appendChild(img);
});
}