const fs = require("fs-extra");
const path = require("path");
const CODE = path.join(__dirname, "..");

function lstReadme() {
  const jsii ={};

  const discoverJsii = (dir) => {
    const jsiiFile = path.join(".jsii");
    // console.log(jsiiFile);
    const manifest = fs.readJsonSync(jsiiFile);
    console.log(manifest);
    for (const [fqn, type] of Object.entries(manifest.types)) {
      jsii[fqn] = {
          ...type,
      };
      console.log(jsii);
    }
    // Also search recursively in nested project dependencies. If the requested module is an external module
    // this will also end-up in the projen module and add the projen types
    if (manifest.dependencies) {
      for (const dependency of Object.keys(manifest.dependencies)) {
          const nestedDependencyFolder = path.dirname(require.resolve(`${dependency}/package.json`, {
              paths: [dir],
          }));
          if (fs.existsSync(nestedDependencyFolder)) {
              discoverJsii(nestedDependencyFolder);
          }
      }
    }
  };

  for (const dir of ['', CODE]) {
    discoverJsii(dir);

    const childDirs = fs.readdirSync('.').map((file) => path.join(dir, file));
    for (const child of childDirs) {
      console.log(child);
      discoverJsii(child);
    }
  }

  return jsii;
}

for (const p of lstReadme()) {
  console.log(p)
  // console.log(`* [${p.pjid}](${p.docsurl}) - ${p.docs}`);
}