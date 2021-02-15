import React from 'react';
import ReactDOM from 'react-dom';
// import { MyApp } from './MyApp';
// import { App } from './App'; // ova e so zagradi{} bidejki vo App.js imame napraveno export bez default. Ako imavme export default mozese bez {} 
// export default voedno ni ovozmozuva da eksportirame povekje raboti vo edna promenliva, a vo slucajot so export na klasata ja eksportirame
// samo klasata i ovde si ja importirame samo nea( klasata App ).
import AppFunc from './AppFunc';
ReactDOM.render(<AppFunc />, document.getElementById('root'));