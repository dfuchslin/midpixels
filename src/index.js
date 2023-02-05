import fs from 'fs';
import characters from './characters.js';
import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';

const calculateCodepoints = (characters) => {
  return {};
};

const readConfig = async () => {
  const codepoints = calculateCodepoints(characters);
  return {
    src: 'svg',
    dest: 'dist',
    svg: {
      width: 585,
      height: 840,
      color: 'black',
      offsets: {
        x: [55, 155, 255, 355, 455],
        y: [20, 135, 250, 365, 480, 595, 710],
      },
    },
    characters,
    codepoints,
  };
};

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
    templates: {},
    pathOptions: {},
    codepoints: config.codepoints,
    fontHeight: 300,
    tag: 'bmwmid',
    prefix: 'bmwmid',
    getIconId: ({
      basename, // `string` - Example: 'foo';
    }) => basename,
  });
};

const generatePreview = async (config) => {
  console.log('Generating preview...');
};

const main = async () => {
  const config = await readConfig();
  clean(config);
  await generateSvg(config);
  await generateAllFonts(config);
  await generatePreview(config);
};

main().then(() => console.log('Fertig! 🥳'));
