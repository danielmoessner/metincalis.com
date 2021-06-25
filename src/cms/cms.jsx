/* eslint-disable react/prop-types */
import CMS, { init } from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import page from './page/index';
import article from './article/index';
import calculator from './calculator/index';
import setting from './setting/index';
import service from './service/index';

// See https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale('de', de);

// See https://www.netlifycms.org/docs/beta-features/#manual-initialization
init({
  config: {
    // See https://www.netlifycms.org/docs/configuration-options/#backend
    backend: {
      name: 'git-gateway',
      branch: 'main',
      repo: 'danielmoessner/online-kreditshop.de',
    },
    // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
    local_backend: true,
    // See https://www.netlifycms.org/docs/configuration-options/#locale
    locale: 'de',
    // See https://www.netlifycms.org/docs/configuration-options/#display-url
    display_url: 'https://onlinekreditshop.de',
    // See https://www.netlifycms.org/docs/configuration-options/#site-url
    site_url: 'https://onlinekreditshop.de',
    // See https://www.netlifycms.org/docs/configuration-options/#media-folder
    media_folder: '/content/media',
    // See https://www.netlifycms.org/docs/configuration-options/#public-folder
    public_folder: '../media',
    // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
    load_config_file: false,
    // See https://www.netlifycms.org/docs/collection-types/
    collections: [page, service, article, calculator, setting],
  },
});
