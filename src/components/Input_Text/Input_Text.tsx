import React, {useRef, useState} from 'react';

const Input_Text = ({text}: {text: string}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);     // режим редактирования
    const [name, setName] = useState<string>(text);                 // текст валюты

    const Change_Text_on_DBL_Click = ():void => {
        setIsEditing(true); // включаем редактирование

    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsEditing(false); // выходим из редактирования, когда теряем фокус

        if(e.target.value == "")
            setName("USD");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value); // обновляем значение при вводе
    };

    return (
        <div
            onDoubleClick={Change_Text_on_DBL_Click}>

            {isEditing ? (
                <input
                type="text"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                />
            ) : (
                name
            )}

        </div>
    );
}

export default Input_Text;


