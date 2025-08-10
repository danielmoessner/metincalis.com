import React, {useEffect} from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Seo from '../../components/Seo';
import ArticleItem from '../../components/ArticleItem';

function Page() {
  const meta = {
     title: 'Immobilienkauf Rechner',
      description: 'Berechnen Sie Ihre Immobilienfinanzierung einfach online.',
  }

    useEffect(() => {
      // eslint-disable-next-line
      const doc = document
      if (doc.getElementById('baufi-lead-script')) {
        doc.getElementById('baufi-lead-script').remove();
      }
      const script = doc.createElement('script');
      script.id = 'baufi-lead-script';
      script.src = 'https://baufi-passt.passt.aws.europace.de/baufi-passt-flex/baufi-passt-flex.js';
      script.defer = true;
      doc.body.append(script);
      
      setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const values = {};
        urlParams.forEach((value, key) => {
          values[key] = value;
        });
        const baufiPasstFlex = document.querySelector('baufi-passt-flex');
        baufiPasstFlex.setAttribute('partner-data', JSON.stringify(values));
      }, 1000)
    }, []);

  return (
     <Layout>
         <Seo meta={meta} />
         <div className="pt-20 overflow-hidden bg-white" style={{ minHeight: '70vh' }}>
           <div className="relative px-4 pt-16 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
             <div className="fixed top-0 bottom-0 z-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
             <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
               <div>
                 <h2 className="text-base font-semibold tracking-wide text-blue-800 uppercase">
                   Rechner
                 </h2>
                 <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                   Immobilienkauf
                 </h1>
               </div>
             </div>
             <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
               <div className="relative lg:row-start-1 lg:col-start-2">
                 <svg
                   className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
                   width="404"
                   height="384"
                   fill="none"
                   viewBox="0 0 404 384"
                   aria-hidden="true"
                 >
                   <defs>
                     <pattern
                       id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                       x="0"
                       y="0"
                       width="20"
                       height="20"
                       patternUnits="userSpaceOnUse"
                     >
                       <rect
                         x="0"
                         y="0"
                         width="4"
                         height="4"
                         className="text-gray-200"
                         fill="currentColor"
                       />
                     </pattern>
                   </defs>
                   <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                 </svg>
               </div>
                 <div className="mt-8 lg:col-span-2">
                   <baufi-passt-flex frontend-key-id="37d3f6c6a9815184033575ff2677e112ec17ebd03438719b7277840869743a51" datenkontext="TEST_MODUS"></baufi-passt-flex>
                 </div>
             </div>
           </div>
         </div>
       </Layout>
  );
}



export default Page;
