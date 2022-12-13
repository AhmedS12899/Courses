"use strict";

window.onload = () => {
    let id = -1;
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid")
        fetch(`http://localhost:8081/api/courses/${id}`)
            .then(res => res.json())
            .then(course => {
                console.log(course);
                document.getElementById('display').innerHTML = `
        <div class="card" style="width: 25rem;">
        <div class="card-header">
            ${course.courseName}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Department-ClassCode: ${course.dept}-${course.courseNum}</li>
            <li class="list-group-item">Professor: ${course.instructor}</li>
            <li class="list-group-item">Start Date: ${course.startDate}</li>
        </ul>
    </div>`
            })
    }
    else {
        console.log('courseId does not match')
    }

    document.getElementById('confirmBtn').onclick = () => {
        fetch(`http://localhost:8081/api/courses/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => {
                console.log('reached')
                location.href = 'index.html'
            })
    }
}