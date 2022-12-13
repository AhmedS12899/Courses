"use strict";

window.onload = () => {
    let userID = document.getElementById('userId');
    let titleId = document.getElementById('titleId');
    let completedId = document.getElementById('completedId');
    document.getElementById('addBtn').onclick = () => {
        let bodyData = {
            id:'',
            userId: userID.value,
            title: titleId.value,
            completed: completedId.value
        }
        fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log("Student Added")
        })
        .catch(err => {
            // If the POST returns an error, display a message
            let confirmationMessage =
            document.getElementById(confirmationMessage);
            confirmationMessage.innerHTML = "Unexpected server error.";
            });
    }
}