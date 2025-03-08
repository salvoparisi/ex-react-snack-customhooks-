import useSwitch from './useSwitch';
import useDate from './useDate';
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

function App() {
  const { currentDate } = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );

}

export default App
