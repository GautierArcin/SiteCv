export type LangPropsType = {
   title: string;
};

export const langPaths = (): [string, string, string] => {
   return ['en', 'fr', 'ja'];
};

export const langProps = (lang: 'en' | 'fr' | 'ja'): LangPropsType => {
   return {
      en: { title: 'Hello World' },
      fr: { title: 'Salut' },
      ja: { title: 'Konishiwa chan' },
   }[lang];
};
