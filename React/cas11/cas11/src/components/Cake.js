import React, { useEffect } from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyCake,restockCakes} from './../actions/CakeActions';

export function Cake() {
    const [inputValue, setInputValue] = useState(0);
    const cakes = useSelector(state => state.CakeReducer.cakes);
    const errorMessage = useSelector(state => state.CakeReducer.message);
    const dispatch = useDispatch();

    // function buyFunc(e){
    //     e.preventDefault();
    //     dispatch(buyCake(inputValue))}
    // };

    // function restockFunc(e) {
    //     e.preventDefault();
    //     dispatch(restockCakes(inputValue));
    // }

    useEffect(() => {
        console.log(inputValue);
    },[inputValue]);

    return(
        <div id="cake">
            <h3>Cake component</h3>
            <h5>Cakes available: {cakes}</h5>
            {errorMessage && <h4>{errorMessage}</h4>}
            <form>
                <label htmlFor="num-cakes">Number of cakes:</label>
                {/* <div>+ Go pretvora vo number</div> */}
                <input type="number" name="num-cakes" value={inputValue} onChange={(e) => {setInputValue(+e.target.value)}} /> <br/> <br/>  
                <button onClick={(e) => {dispatch(buyCake(inputValue), e.preventDefault())}}>Buy </button>
                <button onClick={(e) => {dispatch(restockCakes(inputValue), e.preventDefault())}}>Restock </button>

            </form>
            <button onClick={() => {dispatch(buyCake(1))}}>Buy one cake</button>
            <button onClick={() => {dispatch(buyCake(2))}}>Buy two cakes</button>
            <button onClick={() => {dispatch(buyCake(3))}}>Buy three cakes</button> <br /> <br />
            <button onClick={() => {dispatch(restockCakes())}}>Restock Cakes</button>
        </div>
    )
}