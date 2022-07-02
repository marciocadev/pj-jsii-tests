import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Marcio Almeida',
  authorAddress: 'marcioadev@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'pj-jsii-tests',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marcioadev/pj-jsii-tests.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();