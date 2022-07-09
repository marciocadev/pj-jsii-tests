const fullGitHistory = require('full-git-history');

fullGitHistory(['/home/marcio/marciocadev/pj-jsii-tests', '-no', '-r'], (error, history) => {
 
  if (error) {
    console.error(`Cannot read history: ${error.message}`);
    return;
  }
 
  console.log(`There are ${history.commits.length} commits.`);

  console.log(JSON.stringify(history));

  console.log(history);
 
});