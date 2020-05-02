import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

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
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    production && terser()
  ],
  external: ['react']
}
