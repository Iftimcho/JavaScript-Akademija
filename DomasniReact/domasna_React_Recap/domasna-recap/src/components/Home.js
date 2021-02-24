import React,{useState} from 'react';
import {ShowDates} from './ShowDates';

export function Home(props) {
  const [dates, setDates] = useState([]);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
    function addDate(e) {
        e.preventDefault();
        let date = {
            day: day,
            month: month,
            year: year
        }
    
        if(dates.length > 0) {
            date.id = dates.length + 1;
        } 
        else {
          date.id = 0;
        }
        
    
        setDates([
          ...dates, date
        ]);
    
        setDay('');
        setMonth('');
        setYear('');
      }
    
      function deleteDate(date) {
          setDates([
            ...dates.filter(tmp => tmp.id !== date.id)
          ])
      }
    return(
        <div id="home">
            <form onSubmit={addDate}>
        <label htmlFor="day">Day:</label>
        <input 
          type="text" 
          id="day" 
          name="day"
          placeholder="Enter day"
          value={day}
          onChange={(e) => {setDay(e.target.value)}}
          /> 
        <br/>
        <label htmlFor="month">Month:</label>
        <input 
          type="text" 
          id="month" 
          name="month"
          placeholder="Enter month"
          value={month}
          onChange={(e) => {setMonth(e.target.value)}}  
          /> 
        <br/>
        <label htmlFor="year">Year:</label>
        <input 
          type="text" 
          id="year" 
          name="year"
          placeholder="Enter year"
          value={year}
          onChange={(e) => {setYear(e.target.value)}}  
          />
        <br/>

        <button>Add Date</button>
      </form>
      <ShowDates dates={dates} deleteDate={deleteDate} />
        </div>
    )
}