"use strict";

window.onload = () =>{
    let messageId = document.getElementById('messageId');
    let loremId = document.getElementById('loremId');

    if(localStorage.getItem("role") =='student'){
        messageId.innerHTML = `Welcome Student ${localStorage.getItem("name")}`
        loremId.style.color = 'blue';
    }
    else{
        messageId.innerHTML = `Welcome Instructor ${localStorage.getItem("name")}`
        loremId.style.color = 'purple';
    }
}