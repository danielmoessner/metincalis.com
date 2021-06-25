import home from './home';
import calculators from './calculators';
import about from './about';
import articles from './articles';
import contact from './contact';
import imprint from './imprint';
import privacy from './privacy';

export default {
  name: 'page',
  label: 'Seiten',
  label_singular: 'Seite',
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, about, articles, calculators, contact, imprint, privacy],
};
