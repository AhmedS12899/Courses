"use strict";
window.onload = () => {
    let todoId = document.getElementById('todoID');
    let userID = document.getElementById('userID');
    let TitleId = document.getElementById('TitleId');
    let completedId = document.getElementById('completedId');
    document.getElementById('getBtn').onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
            .then(res => res.json())
            .then(data => {
                userID.value = data.userId;
                TitleId.value = data.title;
                completedId.value = data.completed;
            })
    }

    document.getElementById('updateBtn').onclick = () => {
        let bodyData = {
            id: todoId.value,
            userId: userID.value,
            title: TitleId.value,
            completed: completedId
        }
        fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'PUT',
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                let confirmationMessage = document.getElementById('confirmation');
                confirmationMessage.innerHTML = "Student updated";
            })
            .catch(err => {
                let confirmationMessage =
                document.getElementById('confirmation');
                confirmationMessage.innerHTML = "Unexpected error";
            });
    }

    document.getElementById('cancelBtn').onclick = () =>{
        location.href = 'index.html';
    }
}