import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'BlogNg',
  distFolder: './dist/blog-ng',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
