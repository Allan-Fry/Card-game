
import './App.css';
import Origionalframe from './components/origionalcard/origionalframe';
import Starterdecks from './cards/starterdeck.json';


function App() {
  const test = {cardname:'Red', cardtag:'Striker', cardtext:'Hello World'}
  return (
    <div className="App">
        <Origionalframe {...test}/>
    </div>
  );
}

export default App;

