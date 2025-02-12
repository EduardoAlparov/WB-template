// eslint-disable-next-line import/no-extraneous-dependencies
import documenReady from './helpers/documenReady';

import detectTouch from './modules/detectTouch';

import lazyIMages from './modules/lazyIMages';
import initModal from './modules/initModal';

import masks from './modules/masks';
import validation from './modules/validation';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  detectTouch();
  lazyIMages();
  initModal();

  masks();
  validation();
});
