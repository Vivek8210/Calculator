
import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
 import {CalculatorApp} from './calculator/components/CalculatorApp'
 import { store } from './calculator/redux/store';
 import { Provider } from 'react-redux';
import './calculator/css/App.css'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CalculatorApp/>
      </Provider>
     {/* <Counter/>
     <br />
     <hr />
      <Todo/> */}
   
    
    </div>
  );
}

export default App;
