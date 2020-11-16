import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import asc from 'rollup-plugin-asc';

const cpnConfig = (file, mod) => ({
  input: path.join(__dirname, 'src', file),
  output: {
    file: path.join(__dirname, 'dist', file.substring(file.lastIndexOf('.'), 0) + '.js'),

    // format: 'esm',

    format: 'cjs',
    exports: 'auto',
  },
  external: ['fs', 'path', '@assemblyscript/loader'],
  plugins: [
    resolve(),
    commonjs(),
    asc({
      output: path.join(__dirname, 'dist', mod),
      // args: ['--measure'],
    }),
  ],
  watch: {
    clearScreen: false,
  },
});

export default [
  { ...cpnConfig('./libm/libm.ts', 'libm') },
  // ...
];
