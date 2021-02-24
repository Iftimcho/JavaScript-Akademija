import React,{useEffect} from 'react';
import {sayGoodbye, sayHello} from './../actions/SayHelloActions';
import {useDispatch, useSelector} from 'react-redux';

export function FuncComp() {
    const greeting = useSelector(state => state.SayHelloReducer.greeting);
    const goodbye = useSelector(state=>state.SayHelloReducer.goodbye);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sayHello());
        dispatch(sayGoodbye());
    },[dispatch]);
    return(
        <div id="func-comp">
            <h2>Functional Component</h2>
            <h4>{greeting}</h4>
            <h4>{goodbye}</h4>
        </div>
    )
}