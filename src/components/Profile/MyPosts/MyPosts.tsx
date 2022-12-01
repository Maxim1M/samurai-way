import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                New post
            </div>
            <div className={s.post}>
                <Post message='Hi, how are yoy?' likesCount={34}/>
                <Post message='It is first post' likesCount={21}/>
            </div>
        </div>
    )
}