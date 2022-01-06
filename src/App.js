import logo from './logo.svg';
import './App.css';
import { Field } from './components/field/field';
import { Language } from './components/language/language';
import { Translate } from './components/translate/translate';

function App() {
  return (
    <div>
      <Field/>
      <Language/>
      <hr/>
      <Translate/>
    </div>
  );
}

export default App;
