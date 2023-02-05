# MID pixels

A custom 5x7 pixel font comprising all the characters and symbols displayed on the BMW Multi Information Display (MID) on E38 and E39 models. The characters might also be in use on other I-BUS LCD displays (instrument cluster, radio, etc). The character set is custom and matches the ASCII character set from characters 32 to 125. Above code point 125, the character set is custom and very specific to the symbols needed for displaying system controls such as volume, arrows, bars, and various symbols.

![Sample character set](./assets/sample.png)

### Background

Using a customized test harness (usb adapter, custom code), I sent all possible 8-bit values to a MID display and mapped the pixels for each character. There are a total of 144 displayable characters/symbols. See the map in [characters.js](./src/characters.js).

## Building the font

Prerequisites:
* nodejs 18+

```bash
npm install
npm run build
```

Individual svg files will be created in the `svg` directory. Usable font files will be created in the `dist` directory. A sample/preview page is also created in the `dist` directory.

