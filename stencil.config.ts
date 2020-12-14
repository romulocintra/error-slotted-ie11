import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  buildEs5: true,
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    shadowDomShim: true,
    scriptDataOpts: true,
    appendChildSlotFix: true,
    cloneNodeFix: true,
    slotChildNodesFix: true
  },
  plugins: [sass()],
  namespace: 'component-extend-poc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
