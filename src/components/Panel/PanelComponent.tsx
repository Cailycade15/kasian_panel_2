import { useState, useRef } from 'react';
import cl from "./PanelComponent.module.css";
import First_Line from '../First_Line/First_Line';
import Second_Line from '../Second_Line/Second_Line';
import Input_Text from '../Input_Text/Input_Text';
import html2canvas from 'html2canvas';

function PanelComponent() {

  const [cur, setCur] = useState<string>("USDT")
  const screen = useRef<HTMLDivElement>(null!);

  const handleScreen = async () => {
    if (!screen.current) return;

    try {
      const canvas = await html2canvas(screen.current, { scale: 2, useCORS: true });

      // Преобразуем canvas в Blob и создаем ссылку для скачивания
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "screenshot.png"; // имя файла
        link.click();
        URL.revokeObjectURL(url); // освобождаем память
      }, "image/png");
    } catch (error) {
      console.error("Ошибка при создании скриншота:", error);
    }
  };

  return (
    <>
    <button 
      onClick={() => handleScreen()}>
      Скачать скриншот
    </button>

    <input 
      className={cl.input_currency}
      type="text" 
      value={cur}
      onChange={(e) => setCur(e.target.value)}/>
    
    <div className={cl.box} ref={screen}>
      <First_Line currency={cur} setCurrency={setCur}/>
      <Second_Line currency={cur} setCurrency={setCur}/>

      <span className={cl.line}>
        <span className={cl.third_text}> Т-п/c-л позиции          </span>
        <span className={cl.text_green}> <Input_Text text="--"/>  </span>
        <span className={cl.text_red}  > <Input_Text text="--"/>  </span>
      </span>

      <span className={cl.last_line}>
        <span className={cl.but}>Т-п/c-л</span>
        <span className={cl.but}>Обратная заявка</span>
        <span className={cl.but}>Закрыть</span>
      </span>

    </div>
    </>
  );
}

export default PanelComponent;
