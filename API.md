* mv README.md README.md.bak
* cat README.md.bak | markmac > README.md
* rm README.md.bak

<!-- <macro exec="node scripts/project-name.js"> -->
# pj-jsii-tests
<!-- </macro> -->

<!-- <macro exec="date +%x"> -->
07/09/22
<!-- </macro> -->

<!-- <macro exec="node scripts/gitlog.js"> -->
There are 3 commits.
{"REFS":{"HEAD":"main"},"commits":[{"sha1":"043ceb6f707ea6b96339f9a418411aaa94cb1435","parents":["f1ca6dd73aad70625f3fb6d3d230135fcef7ac99"],"tree":"5491ae2f64140335f53e385fc7f5b93ee82b454f","author":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T20:31:52-03:00"},"committer":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T20:31:52-03:00"},"message":"feat: update README","refs":["main","origin/main"]},{"sha1":"f1ca6dd73aad70625f3fb6d3d230135fcef7ac99","parents":["d40dbdb1f5009b443db32b8052cef763049e54aa"],"tree":"82c944822e6d354c1311eccc8d4f99790fe301fc","author":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T20:31:01-03:00"},"committer":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T20:31:01-03:00"},"message":"feat: update README"},{"sha1":"d40dbdb1f5009b443db32b8052cef763049e54aa","parents":[],"tree":"6f29003fbbed13f20b6a05ed49903ba97a395f70","author":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T18:30:57-03:00"},"committer":{"user":{"name":"Marcio Almeida","email":"marcioadev@gmail.com"},"date":"2022-07-02T18:30:57-03:00"},"message":"chore: project created with projen"}],"heads":{"main":{"sha1":"043ceb6f707ea6b96339f9a418411aaa94cb1435","type":"commit","size":242,"upstream":"refs/remotes/origin/main","push":"refs/remotes/origin/main","HEAD":true}},"tags":{},"remotes":{"origin":{"main":{"sha1":"043ceb6f707ea6b96339f9a418411aaa94cb1435","type":"commit","size":242}}}}
{
  REFS: { HEAD: 'main' },
  commits: [
    {
      sha1: '043ceb6f707ea6b96339f9a418411aaa94cb1435',
      parents: [Array],
      tree: '5491ae2f64140335f53e385fc7f5b93ee82b454f',
      author: [Object],
      committer: [Object],
      message: 'feat: update README',
      refs: [Array]
    },
    {
      sha1: 'f1ca6dd73aad70625f3fb6d3d230135fcef7ac99',
      parents: [Array],
      tree: '82c944822e6d354c1311eccc8d4f99790fe301fc',
      author: [Object],
      committer: [Object],
      message: 'feat: update README'
    },
    {
      sha1: 'd40dbdb1f5009b443db32b8052cef763049e54aa',
      parents: [],
      tree: '6f29003fbbed13f20b6a05ed49903ba97a395f70',
      author: [Object],
      committer: [Object],
      message: 'chore: project created with projen'
    }
  ],
  heads: {
    main: {
      sha1: '043ceb6f707ea6b96339f9a418411aaa94cb1435',
      type: 'commit',
      size: 242,
      upstream: 'refs/remotes/origin/main',
      push: 'refs/remotes/origin/main',
      HEAD: true
    }
  },
  tags: {},
  remotes: { origin: { main: [Object] } }
}
<!-- </macro> -->

# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### BaseProjectOptions <a name="BaseProjectOptions" id="pj-jsii-tests.BaseProjectOptions"></a>

Options for BaseProject.

#### Initializer <a name="Initializer" id="pj-jsii-tests.BaseProjectOptions.Initializer"></a>

```typescript
import { BaseProjectOptions } from 'pj-jsii-tests'

const baseProjectOptions: BaseProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pj-jsii-tests.BaseProjectOptions.property.name">name</a></code> | <code>string</code> | something. |

---

##### `name`<sup>Required</sup> <a name="name" id="pj-jsii-tests.BaseProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* whatever

something.

---

## Classes <a name="Classes" id="Classes"></a>

### BaseProject <a name="BaseProject" id="pj-jsii-tests.BaseProject"></a>

Base Project.

#### Initializers <a name="Initializers" id="pj-jsii-tests.BaseProject.Initializer"></a>

```typescript
import { BaseProject } from 'pj-jsii-tests'

new BaseProject(options: BaseProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pj-jsii-tests.BaseProject.Initializer.parameter.options">options</a></code> | <code><a href="#pj-jsii-tests.BaseProjectOptions">BaseProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="pj-jsii-tests.BaseProject.Initializer.parameter.options"></a>

- *Type:* <a href="#pj-jsii-tests.BaseProjectOptions">BaseProjectOptions</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pj-jsii-tests.BaseProject.property.name">name</a></code> | <code>string</code> | Project name. |

---

##### `name`<sup>Required</sup> <a name="name" id="pj-jsii-tests.BaseProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---



