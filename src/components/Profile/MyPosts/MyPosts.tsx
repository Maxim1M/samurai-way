import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../App";

export type AppPropsType = {
    postData: PostDataType[]
}
export const MyPosts = (props: AppPropsType) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <input/>
                <button>add</button>
            </div>
            <div className={s.post}>
                {props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}