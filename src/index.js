import fs from 'fs';
import characters from './characters.js';
import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import Handlebars from 'handlebars';

const padNum = (num) => {
  return String(num).padStart(3, '0');
};

const readConfig = async () => {
  return {
    fontName: 'midpixels',
    svgDir: 'svg',
    destDir: 'dist',
    svg: {
      template: './templates/midpixels.svg.hbs',
      width: 585,
      height: 840,
      color: 'black',
      offsets: {
        x: [55, 155, 255, 355, 455],
        y: [20, 135, 250, 365, 480, 595, 710],
      },
      pixel: {
        width: 75,
        height: 90,
      },
    },
    characters,
    codepoints: characters.reduce((acc, cur) => {
      acc[`${padNum(cur.id)}`] = cur.id;
      return acc;
    }, {}),
    preview: {
      title: 'midpixels',
      description: 'BMW MID pixel font',
      template: './templates/index.html',
    },
  };
};

const clean = (config) => {
  console.log('Cleaning... 🧹');
  fs.rmSync(config.svgDir, { force: true, recursive: true });
  fs.rmSync(config.destDir, { force: true, recursive: true });
  fs.mkdirSync(config.svgDir);
  fs.mkdirSync(config.destDir);
};

const generateSvg = async (config) => {
  console.log('Generating svg characters...');

  const template = Handlebars.compile(fs.readFileSync(config.svg.template).toString());

  for (const character of config.characters) {
    const id = character.id;
    const desc = character.desc;
    const pixels = [];
    let i = 0;
    for (const row of character.pixels) {
      const columns = [];
      let j = 0;
      for (const column of row) {
        const char_pixel = {};
        char_pixel['active'] = column === 1;
        char_pixel['color'] = config.svg.color;
        char_pixel['x'] = config.svg.offsets.x[j];
        char_pixel['y'] = config.svg.offsets.y[i];
        columns.push(char_pixel);
        j += 1;
      }
      pixels.push(columns);
      i += 1;
    }

    const filename = `${config.svgDir}/${padNum(id)}.svg`;
    const svg = template({ svg: config.svg, id, desc, pixels });
    fs.writeFileSync(filename, svg);
    console.log(`   created character ${id} '${desc}' in file ${filename}`);
  }
};

const generateAllFonts = async (config) => {
  console.log('Generating font...');
  await generateFonts({
    name: 'midpixels',
    inputDir: config.svgDir,
    outputDir: config.destDir,
    fontTypes: [
      FontAssetType.TTF,
      FontAssetType.SVG,
      FontAssetType.EOT,
      FontAssetType.WOFF,
      FontAssetType.WOFF2,
    ],
    assetTypes: [OtherAssetType.CSS],
    templates: {},
    pathOptions: {},
    codepoints: config.codepoints,
    fontHeight: 300,
    tag: 'midpixels',
    prefix: 'midpixels',
    getIconId: ({
      basename, // `string` - Example: 'foo';
    }) => basename,
  });
};

const generatePreview = async (config) => {
  console.log('Generating preview...');

  const template = Handlebars.compile(fs.readFileSync(config.preview.template).toString());
  const filename = `${config.destDir}/index.html`;
  const svg = template({
    config,
    now: new Date().getTime(),
  });
  fs.writeFileSync(filename, svg);
  console.log(`   created preview' in file ${filename}`);
};

const main = async () => {
  const config = await readConfig();
  clean(config);
  await generateSvg(config);
  await generateAllFonts(config);
  await generatePreview(config);
};

main().then(() => console.log('Fertig! 🥳'));
