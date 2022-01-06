import { useState } from 'react';
import './App.css';
import { Field } from './components/field/field';
import { Language } from './components/language/language';
import { Translate } from './components/translate/translate';

function App() {
  const [text, setText] = useState('');
  const [langCode, setLangCode] = useState('en');
  return (
    <div>
      <Field setText={setText} />
      <Language  onSubmit={setLangCode} />
      <hr />
      <Translate text={text} langCode={langCode} />
    </div>
  );
}

export default App;
