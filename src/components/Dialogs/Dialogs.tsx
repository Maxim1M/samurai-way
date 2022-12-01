import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={'Lord'} id={1}/>
                <Dialog name={'Jack'} id={2}/>
                <Dialog name={'Karl'} id={3}/>
                <Dialog name={'Wolf'} id={4}/>
                <Dialog name={'Gordon'} id={5}/>
                <Dialog name={'Maks'} id={6}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your LA?'} />
                <Message message={'Yo'} />
            </div>
        </div>
    )
}

type DialogPropsType = {
    name: string
    id: number
}
export const Dialog = (props: DialogPropsType) => {

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
     return (
         <div className={s.message}>{props.message}</div>
     )

}