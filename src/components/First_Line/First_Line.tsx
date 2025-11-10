import React, {useRef, useState} from 'react';
import cl from "./First_Line.module.css";
import Input_Text from '../Input_Text/Input_Text';


function First_Line() {

    const but = useRef<HTMLButtonElement | null>(null);
    const coefficient = useRef<HTMLDivElement | null>(null)

    const change_Lng_Shr = (): void => {
        if(but.current && coefficient.current) 
        {
            if(but.current.textContent == "Лонг"){
                //Меняем текст кнопки
                but.current.textContent = "Шорт";
                but.current.classList.remove(cl.but_lng)
                but.current.classList.add(cl.but_shr)
            }
            else{
                //Меняем текст кнопки
                but.current.textContent = "Лонг";
                but.current.classList.remove(cl.but_shr)
                but.current.classList.add(cl.but_lng)

            }
        }
    }

    const change_Color_Text= (): void => {
        //Меняем цвет коофициентов
        if(coefficient.current){
            if(coefficient.current.classList.contains(cl.text_green))
            {
                coefficient.current.classList.remove(cl.text_green)
                coefficient.current.classList.add(cl.text_red)
            }
            else{
                coefficient.current.classList.remove(cl.text_red)
                coefficient.current.classList.add(cl.text_green)
            }
        }
        
    }


    const Change_Text_on_DBL_Click = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        console.log(element.textContent);
    }

  return (
    <div className={cl.first_line}>
      <div className={cl.first_line_flex}>
        <div className={cl.cur_name}>
           <Input_Text text="AIAUSD"/>
        </div>

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

      <div className={cl.first_line_flex}>
        <div className={cl.right_part_up}>
            <Input_Text text="Нереализованная П/У(USDT)"/>
        </div>

        <div 
            className={`${cl.right_part_down}`}
            onContextMenu={() => change_Color_Text()}
            // style={{
            //     color: !but.current?.classList.contains(cl.but_lng) ? "green" : "red"
            // }}
            ref = {coefficient}
            >
            <div className=''> <Input_Text text="+1,249.3337"/> </div>
            <div> <Input_Text text="(+376.34%)"/> </div>
        </div>
      </div>
    </div>
  );
}

export default First_Line;


