"use strict";

window.onload = () => {
    let enterBtn = document.getElementById('enterBtn');
    let studentId = document.getElementById('studentId');
    let instructorId = document.getElementById('instructorId');
    let nameId = document.getElementById('nameId');

    enterBtn.onclick = () => {
        localStorage.setItem("name", nameId.value);
        if (studentId.checked) {
            localStorage.setItem("role", "student");
        }
        else if (instructorId.checked) {
            localStorage.setItem("role", "instructor");
        }
        location.href='infromation.html';
    }
}
//file:///C:/Users/flash/YearUp/Desktop/YearUp%20Software/Pluralsight/LearnToCode/NodeRestAPI/Courses/storageExercises/information.html
//file:///C:/Users/flash/YearUp/Desktop/YearUp%20Software/Pluralsight/LearnToCode/NodeRestAPI/Courses/storageExercises/infromation.html