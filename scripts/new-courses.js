"use strict";

window.onload = () => {
    let deptId = document.getElementById('deptId');
    let courseNumId = document.getElementById('courseNumId');
    let courseNameId = document.getElementById('courseNameId');
    let instructorId = document.getElementById('instructorId');
    let startDateId = document.getElementById('startDateId');
    let numDaysId = document.getElementById('numDaysId');

    document.getElementById('addBtn').onclick = () => {
        let bodyData = {
            id: '',
            dept: deptId.value,
            courseNum: courseNumId.value,
            courseName: courseNameId.value,
            instructor: instructorId.value,
            startDate: startDateId.value,
            numDays: numDaysId.value
        }
        fetch('http://localhost:8081/api/courses/', {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                location.href='index.html'
            })
    }
}