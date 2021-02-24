import React, { useEffect, useState } from 'react';

export function About() {
    const [studentId, setStudentId] = useState('');
    const [city, setCity] = useState('');
    const [birth, setBirth] = useState('');
    const [grade, setGrade] = useState(0);
    const [student, setStudent] = useState({});

    useEffect(() => {
        if(Object.keys(student).length === 0 && student.constructor === Object) {
            console.log(student);
        } else {
            alert(JSON.stringify(student));
        }
    },[student])

    function showAlert(e) {
        e.preventDefault();
        let newStudent = {
            id: studentId,
            city: city,
            birth: birth,
            grade: grade
        }
        setStudent(newStudent);
        
    }
    return(
        <div id="about">
            <h3>About</h3>
            <form onSubmit={showAlert}>
                <label htmlFor="student-id">Student ID:</label>
                <input type="number" placeholder="Enter ID" value={studentId} onChange={(e) => {setStudentId(e.target.value)}}/> 
                <br/>
                <label htmlFor="city">City:</label>
                <input type="text" placeholder="Enter city" value={city} onChange={(e) => {setCity(e.target.value)}}/> 
                <br/>
                <label htmlFor="birth">Date of birth:</label>
                <input type="text" placeholder="Enter date of birth" value={birth} onChange={(e) => {setBirth(e.target.value)}} /> 
                <br/>
                <label htmlFor="grade">G.P.A:</label>
                <input type="number" placeholder="Enter average grade" value={grade} onChange={(e) => {setGrade(e.target.value)}} /> 
                <br/>
                <button>Alert!</button>
            </form>
        </div>
    )
}