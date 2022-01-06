import { useState } from 'react';
import './App.css';
import { Field } from './components/field/field';
import { Language } from './components/language/language';
import { Translate } from './components/translate/translate';

function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <Field setText={setText} />
      <Language />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
