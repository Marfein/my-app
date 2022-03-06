import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navPage}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />}/>
                        <Route path="/profile" element={<Profile store={props.store} />}/>
                        <Route path="/Music" element={<Music/>} />
                        <Route path="/Settings" element={<Settings/>} />
                        <Route path="/News" element={<News/>} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
);
}
export default App;