* mv README.md README.md.bak
* cat README.md.bak | markmac > README.md
* rm README.md.bak

<!-- <macro exec="node scripts/project-name.js"> -->
# pj-jsii-tests
<!-- </macro> -->

<!-- <macro exec="date +%x"> -->
07/26/23
<!-- </macro> -->

<!-- <macro exec="node scripts/gitlog.js"> -->
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



