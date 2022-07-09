import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Marcio Almeida',
  authorAddress: 'marcioadev@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'pj-jsii-tests',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marcioadev/pj-jsii-tests.git',

  release: true,

  pullRequestTemplateContents: [
    '---',
    'By submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.',
  ],

  bundledDeps: ['@types/jest@27.4.1', 'full-git-history'],
  devDeps: ['markmac'],
  depsUpgradeOptions: {
    // markmac depends on projen, we are excluding it here to avoid a circular update loop
    exclude: ['markmac'],
  },
});

const macros = project.addTask('readme-macros');
macros.exec('mv README.md README.md.bak');
macros.exec('cat README.md.bak | markmac > README.md');
macros.exec('rm README.md.bak');
project.postCompileTask.spawn(macros);

project.synth();