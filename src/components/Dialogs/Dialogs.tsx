import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsItemType, MessagesDataType} from "../../App";

type StateDialogsType = {
    dialogsData: DialogsItemType[]
    messagesData: MessagesDataType[]
}
export type AppPropsType = {
    stateDialogs: StateDialogsType
}

export const Dialogs = (props: AppPropsType) => {

    let dialogElements = props.stateDialogs.dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)
    let messagesElement = props.stateDialogs.messagesData.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}