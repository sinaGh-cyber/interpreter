import { useEffect, useState } from 'react';
import axios from 'axios';

export const Translate = ({ langCode, text }) => {
  const [translatedText, setTranslatedText] = useState('');
  useEffect(() => {
    if (langCode && text) {
      axios
        .post(
          'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA',
          {
            q: text,
            target: langCode,
          },
          { cancelToken: axios.CancelToken.source().token }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [langCode, text]);

  return (
    <div>
      <p>{translatedText}</p>
    </div>
  );
};
