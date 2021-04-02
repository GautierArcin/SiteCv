import { langPaths, langProps } from '@/lib/lang';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

type LangProps = {
   title: string;
};

const Lang = (props: LangProps): JSX.Element => {
   return (
      <div>
         <h1>{props.title}</h1>
      </div>
   );
};

interface PathsProps extends ParsedUrlQuery {
   lang: string;
}

export const getStaticPaths: GetStaticPaths<PathsProps> = async () => {
   const paths = langPaths().map((lang) => ({
      params: {
         lang,
      },
   }));

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps<LangProps> = async ({ params }) => {
   const lang = params ? (String(params.lang) as 'en' | 'fr' | 'ja') : 'en';
   const props = langProps(lang) || { title: 'mdr' };

   return {
      props,
   };
};

export default Lang;
