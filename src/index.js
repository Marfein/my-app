import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
    {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
]
let dialogs = [
    {id:1,name:'Troll'},
    {id:2,name:'Aguaman'},
    {id:3,name:'Greg'},
    {id:4,name:'Margaret'}
]
let messages = [
    {id:1,message:'Hi'},
    {id:2,message:'cool'},
    {id:3,message:'nice'},
    {id:4,message:'lol'}];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
