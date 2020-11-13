import path from 'path';
import asc from 'assemblyscript/cli/asc';

export default (options = {}) => {
  return {
    name: 'asc',
    async transform(code, id) {
      const parsed = path.parse(id);
      await asc.ready;

      await new Promise(async (resolve, reject) => {
        const argv = [
          id,
          ...['-b', path.join(options.output, `${parsed.name}.wasm`)],
          ...(options.textFile ? ['-t', path.join(options.output, `${parsed.name}.wat`)] : []),
          ...(options.tsdFile ? ['-d', path.join(options.output, `${parsed.name}.d.ts`)] : []),
          '-O3',
          '--runtime',
          'none',
          '--sourceMap',
          ...(options.args ? options.args : []),
        ];

        asc.main(argv, {}, async (err) => {
          if (err) return reject(err);
          resolve();
        });
      });

      return {
        code: `
          import fs from 'fs';
          import path from 'path';
          import loader from '@assemblyscript/loader';

          export default loader.instantiateSync(
            fs.readFileSync(path.join(__dirname + '${parsed.name}.wasm')),
            {},
          ).exports;
        `,
        map: { mappings: '' },
      };
    },
  };
};
