import React, { useState } from 'react';
import cl from "./PanelComponent.module.css";
import First_Line from '../First_Line/First_Line';
import Second_Line from '../Second_Line/Second_Line';
import Input_Text from '../Input_Text/Input_Text';

function PanelComponent() {

  const [cur, setCur] = useState<string>("USDT")

  return (
    <>
    <input 
      className={cl.input_currency}
      type="text" 
      value={cur}
      onChange={(e) => setCur(e.target.value)}/>
    
    <div className={cl.box}>
      <First_Line currency={cur} setCurrency={setCur}/>
      <Second_Line currency={cur} setCurrency={setCur}/>

      <span className={cl.line}>
        <span className={cl.third_text}> Т-п/c-л позиции          </span>
        <span className={cl.text_green}> <Input_Text text="--"/>  </span>
        <span className={cl.text_red}  > <Input_Text text="--"/>  </span>
      </span>

      <span className={cl.last_line}>
        <span>Т-п/c-л</span>
        <span>Обратная заявка</span>
        <span>Закрыть</span>
      </span>

    </div>
    </>
  );
}

export default PanelComponent;
