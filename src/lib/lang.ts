export const langPaths: [string, string, string] = () => {
   return ['en', 'fr', 'ja'];
};

export const langProps: Object = (lang: 'en' | 'fr' | 'ja') => {
   return {
      en: { title: 'Hello World' },
      fr: { title: 'Salut' },
      ja: { title: 'Konishiwa chan' },
   }[lang];
};
