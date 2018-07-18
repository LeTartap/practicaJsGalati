//get the form
var form = document.getElementById('ajax-contact');
// Get the messages div.
var formMessages = document.getElementById('form-messages');
// get submit button
var submit = document.getElementById("submit");
// get the list of messages
var messageList = document.getElementById('messages');

var listGroup
showMessages();

function showMessages() {

    messageList.innerHTML = '';


    fetch('http://localhost/modul9_1/index.php')
        .then(response => response.json())
        .then(function (data) {
            console.log(data[0].name);
            console.log(data);

            messageList.innerHTML = '';

            for (i = 0; i < data.length; i++) {
                let output = `<div class="d-flex w-100 justify-content-between"><h5 class="mb-1">${data[i].name}</h5>
                              <small>${data[i].email}</small>
                              </div>
                              <p>${data[i].message}</p>`;
                messageList.innerHTML += output;
            }

        });

}