import { useGate, useList } from "effector-react";
import { $character, AppGate } from "./model";

function App() {
  useGate(AppGate);
  return (
    <div className="App">
      {useList($character, (character) => (
        <p>{JSON.stringify(character)}</p>
      ))}
    </div>
  );
}

export default App;
