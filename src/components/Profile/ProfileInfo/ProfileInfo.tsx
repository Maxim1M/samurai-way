import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    height='300px'/>
            </div>
            <div className={s.descriptionBlock}>Ava</div>
        </div>
    )
}