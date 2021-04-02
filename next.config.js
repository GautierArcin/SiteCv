module.exports = {
   eslint: {
      dev: true,
   },
   i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
   },
   async redirects() {
      return [
         {
            source: '/',
            destination: '/cv',
            permanent: true,
         },
      ];
   },
};
