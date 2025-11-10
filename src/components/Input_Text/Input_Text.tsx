import React, {useEffect, useRef, useState} from 'react';

type Props = {
    text: string,
    line?: boolean,
    sign_start?: string,
    sign_end?: string

}

const Input_Text = ({text, line, sign_start, sign_end}: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);     // режим редактирования
    const [name, setName] = useState<string>(text);                 // текст валюты

    const Change_Text_on_DBL_Click = ():void => {
        setIsEditing(true); // включаем редактирование

    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsEditing(false); // выходим из редактирования, когда теряем фокус

        if(e.target.value == ""){
            setName("Enter");
            return;
        }

        setName(prevName => {
            let newName = prevName;

            // Проверка на стартовые символы
            if (sign_start && !newName.startsWith(sign_start)) {
                newName = sign_start + newName;
            }

            // Проверка на конечные символы
            if (sign_end && !newName.endsWith(sign_end)) {
                newName = newName + sign_end;
            }

            return newName;
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value); // обновляем значение при вводе
    };

    return (
        <div
            style={{
                borderBottom: line == true ? "dotted" : "",
                
            }}
            onDoubleClick={Change_Text_on_DBL_Click}>

            {isEditing ? (
                <input
                type="text"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                style={{
                    width: `${name.length + 1}ch`,
                    fontSize: "18px"
                }}
                />
            ) : (
                name
            )}

        </div>
    );
}

export default Input_Text;


