import __mochaWithHTML from './src/mocha/mochaWithHTML';
import __setup from './src/setup';

export default {
  setup : __setup,
  mocha : {
    withHTML : __mochaWithHTML
  }
};
