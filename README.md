# Assembly Starter

## Usage

```sh
$ yarn install
$ yarn build
```

## Git

```sh
$ git clone https://github.com/Shyam-Chen/Component-Starter app-assemblies
$ cd app-assemblies
```

```ts
.
├── app-assemblies
└── <PROJECT_NAME>
```

```js
{
  "name": "<PROJECT_NAME>",
  "scripts": {
    "postinstall": "cpx \"../app-assemblies/dist/**/*\" ./node_modules"
  }
}
```

### Node.js

```js
import { abs, acos } from 'libm';
```

### Webpack

webassembly-loader

### Rollup

@rollup/plugin-wasm

## Npm
