import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import codepoints from './codepoints.js';
import fs from 'fs';

const clean = (config) => {
  console.log('Cleaning... 🧹');
  fs.rmSync(config.src, { force: true, recursive: true });
  fs.rmSync(config.dest, { force: true, recursive: true });
  fs.mkdirSync(config.src);
  fs.mkdirSync(config.dest);
};

const generateSvg = async (config) => {
  console.log('Generating svg characters...');
};

const generateAllFonts = async (config) => {
  console.log('Generating font...');
  await generateFonts({
    name: 'bmwmid',
    inputDir: './out', // (required)
    outputDir: './dist', // (required)
    fontTypes: [
      FontAssetType.TTF,
      FontAssetType.SVG,
      FontAssetType.EOT,
      FontAssetType.WOFF,
      FontAssetType.WOFF2,
    ],
    assetTypes: [OtherAssetType.CSS, OtherAssetType.HTML],
    //assetTypes: [OtherAssetType.CSS, OtherAssetType.HTML, OtherAssetType.JSON, OtherAssetType.TS],
    formatOptions: { json: { indent: 2 } },
    templates: {},
    pathOptions: {},
    codepoints,
    fontHeight: 300,
    round: undefined,
    descent: undefined,
    normalize: undefined,
    selector: null,
    tag: 'bmwmid',
    prefix: 'bmwmid',
    getIconId: ({
      basename, // `string` - Example: 'foo';
      relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
      absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
      relativeFilePath, // `string` - Example: 'foo.svg'
      index, // `number` - Example: `0`
    }) => `${basename}`,
  });
};

const main = async () => {
  const config = {
    src: 'svg',
    dest: 'dist',
  };
  clean(config);
  await generateSvg(config);
  await generateAllFonts(config);
};

main().then(() => console.log('Fertig! 🥳'));
