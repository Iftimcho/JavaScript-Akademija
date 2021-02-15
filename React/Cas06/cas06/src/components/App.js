import { func } from 'prop-types';
import React, {useState,useEffect} from 'react';
import {Todos} from './Todos';
export function App() {
  const [person, setPerson] = useState({firstName: '', lastName: ''});
  const [car, setCar] = useState({model: 'Yugo', year: 1986});
  const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday']);
  const [todos, setTodos] = useState([
    {id:0,todoText:'Listen react course',done:false},
    {id:1,todoText:'Do react homework',done:false},
    {id:2,todoText:'Go to sleep',done:false},
  ]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(()=> {
    console.log(person);
  }, [person]);

  function updateCar() {
    setCar({model: 'Ford', year: 2017})
  };

  function addDay() {
    setDays(['Sunday', ...days, 'Friday']); // Moze da se dodadi i od napred
  };

  function addTodo() {
    let todo = {
      id: todos.length + 1,
      todoText: newTodo,
      done: false
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  function markTodoAsDone(todo) {
    console.log(todo);
    setTodos(
      [
        ...todos.map((item) => 
          item.id === todo.id ? //go barame kliknation element po negovoto id
          {id:item.id, todoText:item.todoText,done: !item.done} //ako go najde menuvame done so sprotivnata negova vrednost
          : item //za site ostanati vrati gi kako sto se
        )
      ]
    )
  }
  return(
    <div id="app">
      <h2>Cas 06 - React JS </h2>
      <input type="text" placeholder="enter first name"  value={person.firstName} onChange={(e) => {setPerson({...person, firstName: e.target.value})}} />
      <input type="text" placeholder="enter last name"  value={person.lastName} onChange={(e) => {setPerson({...person, lastName: e.target.value})}} />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Godina: {car.year}</p>

      <button onClick={updateCar}>Buy new car</button>
      <ul>
        {days.map((day, i) => {
          return(
            <li key={i}>
              {day}
            </li>
          )
        })}
      </ul>
      <button onClick={addDay}>
        Add Day
      </button>
      <h2>Working with Todos</h2>
      <input type="text" placeholder="Add new todo"
      value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <Todos todoList={todos}
        markTodoAsDone={markTodoAsDone}
      />
    </div>
  )
}