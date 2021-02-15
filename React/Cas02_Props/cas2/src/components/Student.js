import React from 'react';

export function Student(props) {
    // console.log(props);
    return(
        <div id="student">
            <p>Student Name: {props.studentFinki.ime}</p>
            <p>Student Prezime: {props.studentFinki.prezime}</p>
            <p>Student Vozrast: {props.studentFinki.age}</p>
            <p>Student broj na indeks: {props.studentFinki.brNaIndeks}</p>

        </div>
    )
}