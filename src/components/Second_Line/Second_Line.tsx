import React from 'react';
import Show_Element from '../Show_Element/Show_Element';
import cl from "./Second_Line.module.css"

type Props = {
    currency: string,
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const Second_Line = ({currency, setCurrency}: Props) => {
    

    return (
        <>
        <div className={cl.line}>
            <div className={cl.column}>
                <Show_Element text="Позиция" value="4,570.53" cur={{currency, setCurrency}}/>
                <Show_Element text="Ср. цена открытия" value="2.6831" line={true}/>
            </div>

            <div className={cl.column}>
                <Show_Element text="Маржа" value="332.12" cur={{currency, setCurrency}}/>
                <Show_Element text="Маркировка" value="3.6924"/>
            </div>
            
            <div className={cl.column} style={{textAlign: "right"}}>
                <Show_Element text="Риск" value="6,54%" line={true} color_value="#2AAA94" sign_end="%"/>
                <Show_Element text="Ожидю цена ликвид." value="---" line={true}/>
            </div>
        </div>
        </>
    );
}

export default Second_Line;


