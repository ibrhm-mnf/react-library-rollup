import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    { file: `${dist}/${bundle}.cjs.js`, format: 'cjs' },
    { file: `${dist}/${bundle}.esm.js`, format: 'esm' },
    {
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      name: 'myReact',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    peerDepsExternal(),
    builtins(),
    postcss({
      modules: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    production && terser()
  ]
}
