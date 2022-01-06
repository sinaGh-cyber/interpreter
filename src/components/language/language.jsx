import { useRef } from 'react';
import { languagesData } from './languageData';

export const Language = ({ onSubmit }) => {
  const selectLangEl = useRef();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(selectLangEl.current.value);
        }}
      >
        <select ref={selectLangEl} defaultValue={'en'} type="selection">
          {languagesData.map((lang, key) => {
            return (
              <option value={lang.code} key={key}>
                {lang.language}
              </option>
            );
          })}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};
