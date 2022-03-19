import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./components/Redux/ReduxStore";
import UsersContainer from "./components/Music/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar friends={store.getState().sidePage.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/profile/*" element={<ProfileContainer />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/Settings" element={<Settings/>} />
                        <Route path="/News" element={<News/>} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
);
}
export default App;