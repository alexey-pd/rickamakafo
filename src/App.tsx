import { useGate, useList } from "effector-react";
import { $character, AppGate } from "./model";
import style from "./main.module.css";

function App() {
  useGate(AppGate);
  return (
    <div className={style.grid}>
      {useList($character, (character) => (
        <div>
          <p>
            <b>{character.name}</b>
          </p>
          <img width={200} src={character.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
