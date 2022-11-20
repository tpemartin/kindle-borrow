import logo from './logo.svg';
import './App.css';
import { CheckOutButton, OnHoldSwitch } from './SwitchButtons';
import { Actions } from './Actions';

function App() {
  return (
    <div className="App">
      <Actions switchOn={true}/>
    </div>
  );
}

export default App;
