import React, {useEffect, useRef, useState} from 'react';
import Input_Text from '../Input_Text/Input_Text';
import cl from "./Show_Element.module.css"

type Props = {
    text: string,
    value: string,
    color_value?: string,
    line?: boolean,
    sign_end?: string,
    cur?:{
        currency: string,
        setCurrency: React.Dispatch<React.SetStateAction<string>>;
    }
}

const Show_Element = ({text, value, color_value, line, sign_end, cur}: Props) => {
    
    const str = text + ( cur ? "(" + cur.currency + ")" : "");

    return (
        <div className={cl.column}>
            <div className={cl.text}>
                <span style={{ borderBottom: line ? "dotted" : ""}}>
                    {str}
                </span>
            </div>
            <div 
                className={cl.value}
                style={{
                    color: color_value ? color_value : ""
                }}>
                <Input_Text text={value} sign_end={sign_end ? sign_end : ""}/>
            </div>
        </div>
    );
}

export default Show_Element;


