import { Language } from "./LanguageList.Types";

type LanguageListProps = {
  languages: Language[];
};

const LanguageList = ({ languages }: LanguageListProps) => {
  return (
    <div>
      LanguageList:
      <ol>
        {languages.map((language) => {
          return (
            <li key={language.id}>
              {language.title} - {language.stack}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default LanguageList;
