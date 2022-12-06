import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";

export type FriendsType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsItemType = {
    id: number
    name: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type FriendsPageType = {
    friends: FriendsType[]
}
type MessagesPageType = {
    messagesData: MessagesDataType[]
    dialogsData: DialogsItemType[]
}
type ProfilePageType = {
    postData: PostDataType[]
}
type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    friendsPage: FriendsPageType
}
type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {

    let someProfile = () => <Profile stateProfile={props.state.profilePage}/>
    let someDialogs = () => <Dialogs stateDialogs={props.state.messagesPage}/>
    let someFriends = () => <Friends stateFriends={props.state.friendsPage} />

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={someProfile}/>
                    <Route path={'/dialogs'} render={someDialogs}/>
                    <Route path={'/friends'} render={someFriends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
