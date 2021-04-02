import { useRouter } from 'next/router';
// import Link from 'next/link';

const CV = (): JSX.Element => {
   const router = useRouter();
   // console.log(router.query);

   //    const currentLocal = router.locale;
   return (
      <div>
         Current locale = {router.locale}
         <br />
         All locales = {router.locales}
         <br />
         Default locale = {router.defaultLocale}
      </div>
   );
};

export default CV;
