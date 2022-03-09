import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { input: 'src/index', name: 'index' },
  ],
  clean: true,
  declaration: true,
  externals: [
    'vue',
  ],
  rollup: {
    emitCJS: true,
  },
})
