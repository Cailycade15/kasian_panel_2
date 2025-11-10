import React from 'react';
import cl from "./PanelComponent.module.css";
import First_Line from '../First_Line/First_Line';

function PanelComponent() {
  return (
    <div className={cl.box}>
      <First_Line/>
    </div>
  );
}

export default PanelComponent;
