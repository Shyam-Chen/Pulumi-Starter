# Assembly Starter

## Create WebAssembly

```sh
$ git clone https://github.com/Shyam-Chen/Assembly-Starter app-assemblies
$ cd app-assemblies

$ yarn install
$ yarn serve
```

## Install in Projects

```sh
$ git clone https://github.com/Shyam-Chen/Assembly-Starter app-assemblies
$ cd app-assemblies

$ yarn install
$ yarn build
```

```ts
.
├── app-assemblies
└── <PROJECT_NAME>
```

```js
{
  "name": "<PROJECT_NAME>",
  "dependencies": {
    "app-assemblies": "file:../app-assemblies"
  }
}
```

```sh
$ pwd
# path/to/<PROJECT_NAME>

$ yarn install
```

### Node.js

```js
import libm from 'app-assemblies/libm';

libm.abs(-2); // 2
```

### Rollup

@rollup/plugin-wasm

```js
import sample from 'app-assemblies/libm/libm.wasm';

sample().then(({ instance }) => {
  instance.exports.abs(-2); // 2
});
```
