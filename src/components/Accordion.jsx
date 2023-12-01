import { useState } from "react";
import style from "../css/modules/Accordion.module.css";

/**
 * @param { { structure: {title: string, content: string}[] } } param
 * @returns 
 */
export default function Accordion({ structure, index: externalIndex }) {
  // Solo una voce dell'accordio può essere aperta alla volta
  const [activeEntry, setActiveEntry] = useState(externalIndex ?? 0);
  
  function isActive(index) {
    if (index === (externalIndex || activeEntry)) {
      return " " + style.active;
    }
  }

  function expandEntry(nuovoIndice){
    setActiveEntry(nuovoIndice);
  }

  return (
    <div className="py-8 text-left">
      {structure.map((entry, i) => {
        return (
          <div key={i} className={style['accordion-entry'] + isActive(i)}>
            <div className={style['accordion-header']} onClick={ () => expandEntry(i) }>
            {/* <div className={style['accordion-header']} onClick={() => setActiveEntry(i)}> */}
              <h2>{entry.title}</h2>

              
              <i className={`fa-solid fa-${ i === (externalIndex || activeEntry) ? 'minus' : 'plus' } `}></i>
            </div>
            <div className={style['accordion-body']}>
              <p>{entry.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}