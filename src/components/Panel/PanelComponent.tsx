import React, { useState } from 'react';
import cl from "./PanelComponent.module.css";
import First_Line from '../First_Line/First_Line';
import Second_Line from '../Second_Line/Second_Line';

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
    </div>
    </>
  );
}

export default PanelComponent;
