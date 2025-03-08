import useSwitch from './useSwitch';
import useDate from './useDate';
import useCustomPointer from "./useCustomPointer";
import './App.css'
// SNACK 1
/* 
function App() {
  const { isOn, toggle } = useSwitch();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}
*/
// SNACK 2
/* 
function App() {
  const { currentDate } = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );

}
*/
// SNACK 3
function App() {
  const { customPointer } = useCustomPointer("🔥");

  return (
    <div>
      <style>
        {`
          body{
            height: 100vh;
            margin: 0;
            cursor: none
          }
        `}
      </style>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}


export default App
