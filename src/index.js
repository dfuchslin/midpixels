import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import codepoints from './codepoints.js';

const generateAllFonts = async () => {
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
  await generateAllFonts();
};

main().then(() => console.log('Done'));
