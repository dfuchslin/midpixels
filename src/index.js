import fs from 'fs';
import characters from './characters.js';
import charactersV2 from './characters-v2.js';
import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import Handlebars from 'handlebars';
import sharp from 'sharp';

const padNum = (num) => {
  return String(num).padStart(3, '0');
};

const toCodepoints = (characters) => {
  return characters.reduce((acc, cur) => {
    acc[`${padNum(cur.id)}`] = cur.codepoint ?? cur.id;
    return acc;
  }, {});
};

const findDifferences = (original, updated) => {
  return updated
    .filter((character) => {
      const match = original.find((o) => o.id === character.id);
      return !match || JSON.stringify(match.pixels) !== JSON.stringify(character.pixels);
    })
    .map((character) => {
      const codepoint = character.codepoint ?? character.id;
      return {
        codepoint,
        hex: `0x${Number(character.id).toString(16).toUpperCase()}`,
        sample: sample(codepoint),
      };
    });
};

const readConfig = async () => {
  return {
    fontName: 'midpixels',
    svgDir: 'dist/svg',
    pngDir: 'dist/png',
    destDir: 'dist',
    v2: {
      fontName: 'midpixels-v2',
      svgDir: 'dist/svg-v2',
      pngDir: 'dist/png-v2',
      characters: charactersV2,
      codepoints: toCodepoints(charactersV2),
      differences: findDifferences(characters, charactersV2),
    },
    svg: {
      template: './templates/midpixels.svg',
      templateDark: './templates/midpixels-dark.svg',
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
    codepoints: toCodepoints(characters),
    charactermap: {
      template: './templates/charactermap.md',
      columns: 12,
    },
    preview: {
      title: 'midpixels',
      description: 'BMW multi-information display (MID) pixel font',
      template: './templates/index.html',
      sample: [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ&#161;&#162;&#163;',
        'abcdefghijklmnopqrstuvwxyz&#164;&#165;&#166;',
        '!"#$%&\'()*+,-./0123456789:;&lt;=',
        '&gt;?@[\\]^_`{|}~&#1127;&#160;&#167;&#168;&#169;&#170;&#171;&#172;&#1173;&#174;&#175;&#176;&#177;&#178;&#179;&#180;',
        '&#181;&#182;&#183;&#184;&#185;&#186;&#187;&#188;&#189;&#190;&#191;&#192;&#193;&#194;&#195;&#196;&#197;&#198;&#199;&#200;&#201;&#202;&#203;&#204;&#205;&#206;&#207;&#32;&#32;',
      ],
      sample_background: '&#178;'.repeat(29),
    },
  };
};

const clean = (config) => {
  console.log('Cleaning... 🧹');
  fs.rmSync(config.svgDir, { force: true, recursive: true });
  fs.rmSync(config.pngDir, { force: true, recursive: true });
  fs.rmSync(config.destDir, { force: true, recursive: true });
  fs.mkdirSync(config.svgDir, { recursive: true });
  fs.mkdirSync(config.pngDir, { recursive: true });
  fs.mkdirSync(config.v2.svgDir, { recursive: true });
  fs.mkdirSync(config.v2.pngDir, { recursive: true });
  fs.mkdirSync(config.destDir, { recursive: true });
};

const chunk = (items, size) => {
  const chunks = [];
  items = [].concat(...items);

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
};

const sample = (id) => {
  if (id === 32) {
    return '&nbsp;';
  }
  return `&#${id};`;
};

const convertSvgToPng = async (svgFilename, pngFilename) => {
    await sharp(svgFilename)
        .png({})
        .toFile(pngFilename)
}

const templateSvg = async (config, variant, filenameBase, template, id, desc, pixels) => {
    const svg = config.svg;
    const filename = `${variant.svgDir}/${filenameBase}.svg`;
    const filenamePng = `${variant.pngDir}/${filenameBase}.png`;
    const outputSvg = template({svg, characters: [{id, desc, pixels}]});
    fs.writeFileSync(filename, outputSvg);
    await convertSvgToPng(filename, filenamePng);
    console.log(`   created character ${id} '${desc}' in files ${filename} and ${filenamePng}`);
}

const generateSvg = async (config, variant) => {
  console.log(`Generating svg characters for ${variant.fontName}...`);

  const template = Handlebars.compile(fs.readFileSync(config.svg.template).toString());
  const templateDark = Handlebars.compile(fs.readFileSync(config.svg.templateDark).toString());

  const characters = [];

  for (const character of variant.characters) {
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
    character.hex = `0x${Number(character.id).toString(16).toUpperCase()}`;
    character.pixels = pixels;
    character.codepoint = character.codepoint ?? character.id;
    character.sample = sample(character.codepoint);
    character.padded_id = padNum(id);
    characters.push(character);

    await templateSvg(config, variant, `${padNum(id)}`, template, id, desc, pixels);
    await templateSvg(config, variant, `${padNum(id)}-dark`, templateDark, id, desc, pixels);
  }

  const filename = `${config.destDir}/${variant.fontName}.svg`;
  const svg = template({ svg: config.svg, characters });
  fs.writeFileSync(filename, svg);
  console.log(`   created combined svg in file ${filename}`);

  if (variant !== config) {
    return;
  }

  const characterMapTemplate = Handlebars.compile(
    fs.readFileSync(config.charactermap.template).toString()
  );
  const characterMapFilename = `${config.destDir}/charactermap.md`;
  const characterMap = characterMapTemplate({
    rows: chunk(characters, config.charactermap.columns),
  });
  fs.writeFileSync(characterMapFilename, characterMap);
  console.log(`   created charactermap in file ${characterMapFilename}`);
};

const generateAllFonts = async (config, variant) => {
  console.log(`Generating font ${variant.fontName}...`);
  await generateFonts({
    name: variant.fontName,
    inputDir: variant.svgDir,
    outputDir: config.destDir,
    fontTypes: [FontAssetType.TTF, FontAssetType.EOT, FontAssetType.WOFF, FontAssetType.WOFF2],
    assetTypes: [OtherAssetType.CSS],
    templates: {},
    pathOptions: {},
    codepoints: variant.codepoints,
    fontHeight: 300,
    tag: variant.fontName,
    prefix: variant.fontName,
    getIconId: ({ basename }) => basename,
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
  for (const variant of [config, config.v2]) {
    await generateSvg(config, variant);
    await generateAllFonts(config, variant);
  }
  await generatePreview(config);
};

main().then(() => console.log('Fertig! 🥳'));
