import { useRouter } from 'next/router';
import Link from 'next/link';

const Index = (): JSX.Element => {
   // const router = useRouter();
   // console.log(router.query);

   return (
      <div>
         <h1>Hello world!</h1>
         <p>You are using Matthieu LOCUSSOL's starter using Typescript and Next.js!</p>
         {/* ça bien */}
         <Link href="/PilaSuce">CLIQUE SALOPE</Link>
         {/* ça pa bien */}
         <a href="/PilaSuce">Swissex aussi</a>
      </div>
   );
};

export default Index;
