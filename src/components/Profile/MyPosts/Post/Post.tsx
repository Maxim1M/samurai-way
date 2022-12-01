import React from "react";
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    likesCount: number
}
export const Post = (props: PostPropsType) => {

    return (
        <div className={s.item}>
            <img
                src='https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=384&w=480'/>
            {props.message}
            <div>
                <button>{props.likesCount} like</button>
            </div>
        </div>
    )
}