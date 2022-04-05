import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export function createConfig(mainFile, moduleFile, typingsFile) {
  return [
    bundle({
      plugins: [esbuild(), filesize()],
      output: [
        {
          file: mainFile,
          format: 'cjs',
          sourcemap: true,
        },
        {
          file: moduleFile,
          format: 'es',
          sourcemap: true,
        },
      ],
    }),
    bundle({
      plugins: [dts()],
      output: {
        file: typingsFile,
        format: 'es',
      },
    }),
  ];
}
