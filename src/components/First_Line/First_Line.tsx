import React, {useRef, useState} from 'react';
import cl from "./First_Line.module.css";


function First_Line() {

    const but = useRef<HTMLButtonElement | null>(null);

    const change_Lng_Shr = (): void => {
        if(but.current) 
        {
            if(but.current.textContent == "Лонг"){
                but.current.textContent = "Шорт";
                but.current.classList.remove(cl.but_lng)
                but.current.classList.add(cl.but_shr)
            }
            else{
                but.current.textContent = "Лонг";
                but.current.classList.remove(cl.but_shr)
                but.current.classList.add(cl.but_lng)
            }
        }
    }

  return (
    <div className={cl.first_line}>
      <div className={cl.currency}>
        <div className={cl.cur_name}>AIAUSD</div>

        <div className={cl.cur_buttons}>
            <button 
                className={`${cl.but_lng_shr} ${cl.but_lng}`}
                onClick={() => change_Lng_Shr()}
                ref = {but}
            >Лонг</button>

            <div className={cl.just_text}>Кросс</div>
            <div className={cl.coefficient}>10X</div>
        </div>
      </div>
    </div>
  );
}

export default First_Line;


