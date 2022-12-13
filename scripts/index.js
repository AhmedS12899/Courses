"use strict";

window.onload = () =>{
    let tbody = document.getElementById('tBody');
    fetchCourses().then(a => { //a is our courses array
        for(let i = 0; i < a.length; i++){
            createAndDisplayTable(tbody, a[i], i)
        }
    });
}
function fetchCourses(){
    return fetch('http://localhost:8081/api/courses/')
    .then(res =>  res.json())
    .then(courses => {
         return courses;
    })
}
function createAndDisplayTable(tbody, a, i){
    let row = tbody.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = a.dept;
    cell2.innerHTML = a.courseNum;
    cell3.innerHTML = `<a href='C:/Users/flash/YearUp/Desktop/YearUp Software/Pluralsight/LearnToCode/NodeRestAPI/Courses/details.html?courseid=${a.id}'>${a.courseName}</a>`;
    cell4.innerHTML = `<a href='C:/Users/flash/YearUp/Desktop/YearUp Software/Pluralsight/LearnToCode/NodeRestAPI/Courses/confirm-delete.html?courseid=${a.id}'><button type="button" class="btn btn-primary" id="newCourses">Delete Entry</button></a>`
}