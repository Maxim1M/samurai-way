import s from './Friends.module.css'
import {FriendsType} from "../../App";
import {NavLink} from "react-router-dom";
import React from "react";

type FriendsPageType = {
    friends: FriendsType[]
}
type FriendsPropsType = {
    stateFriends: FriendsPageType
}

export const Friends = (props: FriendsPropsType) => {

    let friendsElement = props.stateFriends.friends.map(el => <NavLink to={'/friends/' + el.id}>{el.name}</NavLink>)

    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {friendsElement}
            </div>
        </div>
    )
}