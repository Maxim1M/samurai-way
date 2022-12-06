import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

type profilePageType = {
    postData: PostDataType[]
}
export type ProfilePropsType = {
    stateProfile: profilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts postData={props.stateProfile.postData}/>
        </main>
    )
}