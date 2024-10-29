import { ScullyConfig } from "@scullyio/scully";

export const scullyConfig: ScullyConfig = {
  projectRoot: './src',
  projectName: 'BlogNg',
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },}
}
