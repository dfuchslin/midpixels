# MID pixels

A custom 5x7 pixel font comprising all the characters and symbols displayed on the BMW Multi Information Display (MID) on E38 and E39 models. The characters are probably also in use on other IBUS LCD displays (instrument cluster, radio, etc). The character set matches the ASCII character set from characters 32 to 125 (A-Z, numbers, punctuation, etc). Above code point 125, the character set is custom and very specific to the symbols needed for displaying system controls such as volume, arrows, bars, and various symbols. Three of those upper code points (127, 160, and 173) are characters that do not display nicely in a font (control characters such as delete and soft-hyphen), so I have remapped those symbols to other code points in the font. Otherwise, the code points are the same for IBUS usage and in the font.

![Sample character set](./assets/sample-lcd.png)

## Character map

<table>
  <tbody>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/032-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/032.svg">
          <img height="20px" alt="&nbsp;" src="https://dfuchslin.github.io/midpixels/svg/032.svg">
        </picture>
        0x20<br/>
        32<br/>
        &nbsp;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/033-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/033.svg">
          <img height="20px" alt="&#33;" src="https://dfuchslin.github.io/midpixels/svg/033.svg">
        </picture>
        0x21<br/>
        33<br/>
        &#33;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/034-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/034.svg">
          <img height="20px" alt="&#34;" src="https://dfuchslin.github.io/midpixels/svg/034.svg">
        </picture>
        0x22<br/>
        34<br/>
        &#34;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/035-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/035.svg">
          <img height="20px" alt="&#35;" src="https://dfuchslin.github.io/midpixels/svg/035.svg">
        </picture>
        0x23<br/>
        35<br/>
        &#35;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/036-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/036.svg">
          <img height="20px" alt="&#36;" src="https://dfuchslin.github.io/midpixels/svg/036.svg">
        </picture>
        0x24<br/>
        36<br/>
        &#36;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/037-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/037.svg">
          <img height="20px" alt="&#37;" src="https://dfuchslin.github.io/midpixels/svg/037.svg">
        </picture>
        0x25<br/>
        37<br/>
        &#37;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/038-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/038.svg">
          <img height="20px" alt="&#38;" src="https://dfuchslin.github.io/midpixels/svg/038.svg">
        </picture>
        0x26<br/>
        38<br/>
        &#38;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/039-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/039.svg">
          <img height="20px" alt="&#39;" src="https://dfuchslin.github.io/midpixels/svg/039.svg">
        </picture>
        0x27<br/>
        39<br/>
        &#39;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/040-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/040.svg">
          <img height="20px" alt="&#40;" src="https://dfuchslin.github.io/midpixels/svg/040.svg">
        </picture>
        0x28<br/>
        40<br/>
        &#40;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/041-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/041.svg">
          <img height="20px" alt="&#41;" src="https://dfuchslin.github.io/midpixels/svg/041.svg">
        </picture>
        0x29<br/>
        41<br/>
        &#41;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/042-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/042.svg">
          <img height="20px" alt="&#42;" src="https://dfuchslin.github.io/midpixels/svg/042.svg">
        </picture>
        0x2A<br/>
        42<br/>
        &#42;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/043-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/043.svg">
          <img height="20px" alt="&#43;" src="https://dfuchslin.github.io/midpixels/svg/043.svg">
        </picture>
        0x2B<br/>
        43<br/>
        &#43;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/044-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/044.svg">
          <img height="20px" alt="&#44;" src="https://dfuchslin.github.io/midpixels/svg/044.svg">
        </picture>
        0x2C<br/>
        44<br/>
        &#44;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/045-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/045.svg">
          <img height="20px" alt="&#45;" src="https://dfuchslin.github.io/midpixels/svg/045.svg">
        </picture>
        0x2D<br/>
        45<br/>
        &#45;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/046-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/046.svg">
          <img height="20px" alt="&#46;" src="https://dfuchslin.github.io/midpixels/svg/046.svg">
        </picture>
        0x2E<br/>
        46<br/>
        &#46;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/047-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/047.svg">
          <img height="20px" alt="&#47;" src="https://dfuchslin.github.io/midpixels/svg/047.svg">
        </picture>
        0x2F<br/>
        47<br/>
        &#47;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/048-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/048.svg">
          <img height="20px" alt="&#48;" src="https://dfuchslin.github.io/midpixels/svg/048.svg">
        </picture>
        0x30<br/>
        48<br/>
        &#48;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/049-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/049.svg">
          <img height="20px" alt="&#49;" src="https://dfuchslin.github.io/midpixels/svg/049.svg">
        </picture>
        0x31<br/>
        49<br/>
        &#49;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/050-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/050.svg">
          <img height="20px" alt="&#50;" src="https://dfuchslin.github.io/midpixels/svg/050.svg">
        </picture>
        0x32<br/>
        50<br/>
        &#50;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/051-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/051.svg">
          <img height="20px" alt="&#51;" src="https://dfuchslin.github.io/midpixels/svg/051.svg">
        </picture>
        0x33<br/>
        51<br/>
        &#51;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/052-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/052.svg">
          <img height="20px" alt="&#52;" src="https://dfuchslin.github.io/midpixels/svg/052.svg">
        </picture>
        0x34<br/>
        52<br/>
        &#52;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/053-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/053.svg">
          <img height="20px" alt="&#53;" src="https://dfuchslin.github.io/midpixels/svg/053.svg">
        </picture>
        0x35<br/>
        53<br/>
        &#53;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/054-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/054.svg">
          <img height="20px" alt="&#54;" src="https://dfuchslin.github.io/midpixels/svg/054.svg">
        </picture>
        0x36<br/>
        54<br/>
        &#54;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/055-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/055.svg">
          <img height="20px" alt="&#55;" src="https://dfuchslin.github.io/midpixels/svg/055.svg">
        </picture>
        0x37<br/>
        55<br/>
        &#55;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/056-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/056.svg">
          <img height="20px" alt="&#56;" src="https://dfuchslin.github.io/midpixels/svg/056.svg">
        </picture>
        0x38<br/>
        56<br/>
        &#56;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/057-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/057.svg">
          <img height="20px" alt="&#57;" src="https://dfuchslin.github.io/midpixels/svg/057.svg">
        </picture>
        0x39<br/>
        57<br/>
        &#57;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/058-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/058.svg">
          <img height="20px" alt="&#58;" src="https://dfuchslin.github.io/midpixels/svg/058.svg">
        </picture>
        0x3A<br/>
        58<br/>
        &#58;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/059-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/059.svg">
          <img height="20px" alt="&#59;" src="https://dfuchslin.github.io/midpixels/svg/059.svg">
        </picture>
        0x3B<br/>
        59<br/>
        &#59;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/060-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/060.svg">
          <img height="20px" alt="&#60;" src="https://dfuchslin.github.io/midpixels/svg/060.svg">
        </picture>
        0x3C<br/>
        60<br/>
        &#60;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/061-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/061.svg">
          <img height="20px" alt="&#61;" src="https://dfuchslin.github.io/midpixels/svg/061.svg">
        </picture>
        0x3D<br/>
        61<br/>
        &#61;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/062-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/062.svg">
          <img height="20px" alt="&#62;" src="https://dfuchslin.github.io/midpixels/svg/062.svg">
        </picture>
        0x3E<br/>
        62<br/>
        &#62;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/063-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/063.svg">
          <img height="20px" alt="&#63;" src="https://dfuchslin.github.io/midpixels/svg/063.svg">
        </picture>
        0x3F<br/>
        63<br/>
        &#63;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/064-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/064.svg">
          <img height="20px" alt="&#64;" src="https://dfuchslin.github.io/midpixels/svg/064.svg">
        </picture>
        0x40<br/>
        64<br/>
        &#64;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/065-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/065.svg">
          <img height="20px" alt="&#65;" src="https://dfuchslin.github.io/midpixels/svg/065.svg">
        </picture>
        0x41<br/>
        65<br/>
        &#65;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/066-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/066.svg">
          <img height="20px" alt="&#66;" src="https://dfuchslin.github.io/midpixels/svg/066.svg">
        </picture>
        0x42<br/>
        66<br/>
        &#66;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/067-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/067.svg">
          <img height="20px" alt="&#67;" src="https://dfuchslin.github.io/midpixels/svg/067.svg">
        </picture>
        0x43<br/>
        67<br/>
        &#67;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/068-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/068.svg">
          <img height="20px" alt="&#68;" src="https://dfuchslin.github.io/midpixels/svg/068.svg">
        </picture>
        0x44<br/>
        68<br/>
        &#68;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/069-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/069.svg">
          <img height="20px" alt="&#69;" src="https://dfuchslin.github.io/midpixels/svg/069.svg">
        </picture>
        0x45<br/>
        69<br/>
        &#69;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/070-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/070.svg">
          <img height="20px" alt="&#70;" src="https://dfuchslin.github.io/midpixels/svg/070.svg">
        </picture>
        0x46<br/>
        70<br/>
        &#70;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/071-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/071.svg">
          <img height="20px" alt="&#71;" src="https://dfuchslin.github.io/midpixels/svg/071.svg">
        </picture>
        0x47<br/>
        71<br/>
        &#71;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/072-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/072.svg">
          <img height="20px" alt="&#72;" src="https://dfuchslin.github.io/midpixels/svg/072.svg">
        </picture>
        0x48<br/>
        72<br/>
        &#72;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/073-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/073.svg">
          <img height="20px" alt="&#73;" src="https://dfuchslin.github.io/midpixels/svg/073.svg">
        </picture>
        0x49<br/>
        73<br/>
        &#73;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/074-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/074.svg">
          <img height="20px" alt="&#74;" src="https://dfuchslin.github.io/midpixels/svg/074.svg">
        </picture>
        0x4A<br/>
        74<br/>
        &#74;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/075-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/075.svg">
          <img height="20px" alt="&#75;" src="https://dfuchslin.github.io/midpixels/svg/075.svg">
        </picture>
        0x4B<br/>
        75<br/>
        &#75;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/076-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/076.svg">
          <img height="20px" alt="&#76;" src="https://dfuchslin.github.io/midpixels/svg/076.svg">
        </picture>
        0x4C<br/>
        76<br/>
        &#76;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/077-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/077.svg">
          <img height="20px" alt="&#77;" src="https://dfuchslin.github.io/midpixels/svg/077.svg">
        </picture>
        0x4D<br/>
        77<br/>
        &#77;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/078-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/078.svg">
          <img height="20px" alt="&#78;" src="https://dfuchslin.github.io/midpixels/svg/078.svg">
        </picture>
        0x4E<br/>
        78<br/>
        &#78;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/079-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/079.svg">
          <img height="20px" alt="&#79;" src="https://dfuchslin.github.io/midpixels/svg/079.svg">
        </picture>
        0x4F<br/>
        79<br/>
        &#79;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/080-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/080.svg">
          <img height="20px" alt="&#80;" src="https://dfuchslin.github.io/midpixels/svg/080.svg">
        </picture>
        0x50<br/>
        80<br/>
        &#80;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/081-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/081.svg">
          <img height="20px" alt="&#81;" src="https://dfuchslin.github.io/midpixels/svg/081.svg">
        </picture>
        0x51<br/>
        81<br/>
        &#81;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/082-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/082.svg">
          <img height="20px" alt="&#82;" src="https://dfuchslin.github.io/midpixels/svg/082.svg">
        </picture>
        0x52<br/>
        82<br/>
        &#82;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/083-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/083.svg">
          <img height="20px" alt="&#83;" src="https://dfuchslin.github.io/midpixels/svg/083.svg">
        </picture>
        0x53<br/>
        83<br/>
        &#83;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/084-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/084.svg">
          <img height="20px" alt="&#84;" src="https://dfuchslin.github.io/midpixels/svg/084.svg">
        </picture>
        0x54<br/>
        84<br/>
        &#84;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/085-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/085.svg">
          <img height="20px" alt="&#85;" src="https://dfuchslin.github.io/midpixels/svg/085.svg">
        </picture>
        0x55<br/>
        85<br/>
        &#85;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/086-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/086.svg">
          <img height="20px" alt="&#86;" src="https://dfuchslin.github.io/midpixels/svg/086.svg">
        </picture>
        0x56<br/>
        86<br/>
        &#86;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/087-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/087.svg">
          <img height="20px" alt="&#87;" src="https://dfuchslin.github.io/midpixels/svg/087.svg">
        </picture>
        0x57<br/>
        87<br/>
        &#87;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/088-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/088.svg">
          <img height="20px" alt="&#88;" src="https://dfuchslin.github.io/midpixels/svg/088.svg">
        </picture>
        0x58<br/>
        88<br/>
        &#88;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/089-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/089.svg">
          <img height="20px" alt="&#89;" src="https://dfuchslin.github.io/midpixels/svg/089.svg">
        </picture>
        0x59<br/>
        89<br/>
        &#89;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/090-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/090.svg">
          <img height="20px" alt="&#90;" src="https://dfuchslin.github.io/midpixels/svg/090.svg">
        </picture>
        0x5A<br/>
        90<br/>
        &#90;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/091-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/091.svg">
          <img height="20px" alt="&#91;" src="https://dfuchslin.github.io/midpixels/svg/091.svg">
        </picture>
        0x5B<br/>
        91<br/>
        &#91;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/092-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/092.svg">
          <img height="20px" alt="&#92;" src="https://dfuchslin.github.io/midpixels/svg/092.svg">
        </picture>
        0x5C<br/>
        92<br/>
        &#92;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/093-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/093.svg">
          <img height="20px" alt="&#93;" src="https://dfuchslin.github.io/midpixels/svg/093.svg">
        </picture>
        0x5D<br/>
        93<br/>
        &#93;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/094-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/094.svg">
          <img height="20px" alt="&#94;" src="https://dfuchslin.github.io/midpixels/svg/094.svg">
        </picture>
        0x5E<br/>
        94<br/>
        &#94;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/095-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/095.svg">
          <img height="20px" alt="&#95;" src="https://dfuchslin.github.io/midpixels/svg/095.svg">
        </picture>
        0x5F<br/>
        95<br/>
        &#95;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/096-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/096.svg">
          <img height="20px" alt="&#96;" src="https://dfuchslin.github.io/midpixels/svg/096.svg">
        </picture>
        0x60<br/>
        96<br/>
        &#96;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/097-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/097.svg">
          <img height="20px" alt="&#97;" src="https://dfuchslin.github.io/midpixels/svg/097.svg">
        </picture>
        0x61<br/>
        97<br/>
        &#97;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/098-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/098.svg">
          <img height="20px" alt="&#98;" src="https://dfuchslin.github.io/midpixels/svg/098.svg">
        </picture>
        0x62<br/>
        98<br/>
        &#98;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/099-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/099.svg">
          <img height="20px" alt="&#99;" src="https://dfuchslin.github.io/midpixels/svg/099.svg">
        </picture>
        0x63<br/>
        99<br/>
        &#99;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/100-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/100.svg">
          <img height="20px" alt="&#100;" src="https://dfuchslin.github.io/midpixels/svg/100.svg">
        </picture>
        0x64<br/>
        100<br/>
        &#100;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/101-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/101.svg">
          <img height="20px" alt="&#101;" src="https://dfuchslin.github.io/midpixels/svg/101.svg">
        </picture>
        0x65<br/>
        101<br/>
        &#101;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/102-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/102.svg">
          <img height="20px" alt="&#102;" src="https://dfuchslin.github.io/midpixels/svg/102.svg">
        </picture>
        0x66<br/>
        102<br/>
        &#102;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/103-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/103.svg">
          <img height="20px" alt="&#103;" src="https://dfuchslin.github.io/midpixels/svg/103.svg">
        </picture>
        0x67<br/>
        103<br/>
        &#103;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/104-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/104.svg">
          <img height="20px" alt="&#104;" src="https://dfuchslin.github.io/midpixels/svg/104.svg">
        </picture>
        0x68<br/>
        104<br/>
        &#104;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/105-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/105.svg">
          <img height="20px" alt="&#105;" src="https://dfuchslin.github.io/midpixels/svg/105.svg">
        </picture>
        0x69<br/>
        105<br/>
        &#105;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/106-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/106.svg">
          <img height="20px" alt="&#106;" src="https://dfuchslin.github.io/midpixels/svg/106.svg">
        </picture>
        0x6A<br/>
        106<br/>
        &#106;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/107-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/107.svg">
          <img height="20px" alt="&#107;" src="https://dfuchslin.github.io/midpixels/svg/107.svg">
        </picture>
        0x6B<br/>
        107<br/>
        &#107;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/108-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/108.svg">
          <img height="20px" alt="&#108;" src="https://dfuchslin.github.io/midpixels/svg/108.svg">
        </picture>
        0x6C<br/>
        108<br/>
        &#108;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/109-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/109.svg">
          <img height="20px" alt="&#109;" src="https://dfuchslin.github.io/midpixels/svg/109.svg">
        </picture>
        0x6D<br/>
        109<br/>
        &#109;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/110-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/110.svg">
          <img height="20px" alt="&#110;" src="https://dfuchslin.github.io/midpixels/svg/110.svg">
        </picture>
        0x6E<br/>
        110<br/>
        &#110;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/111-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/111.svg">
          <img height="20px" alt="&#111;" src="https://dfuchslin.github.io/midpixels/svg/111.svg">
        </picture>
        0x6F<br/>
        111<br/>
        &#111;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/112-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/112.svg">
          <img height="20px" alt="&#112;" src="https://dfuchslin.github.io/midpixels/svg/112.svg">
        </picture>
        0x70<br/>
        112<br/>
        &#112;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/113-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/113.svg">
          <img height="20px" alt="&#113;" src="https://dfuchslin.github.io/midpixels/svg/113.svg">
        </picture>
        0x71<br/>
        113<br/>
        &#113;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/114-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/114.svg">
          <img height="20px" alt="&#114;" src="https://dfuchslin.github.io/midpixels/svg/114.svg">
        </picture>
        0x72<br/>
        114<br/>
        &#114;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/115-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/115.svg">
          <img height="20px" alt="&#115;" src="https://dfuchslin.github.io/midpixels/svg/115.svg">
        </picture>
        0x73<br/>
        115<br/>
        &#115;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/116-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/116.svg">
          <img height="20px" alt="&#116;" src="https://dfuchslin.github.io/midpixels/svg/116.svg">
        </picture>
        0x74<br/>
        116<br/>
        &#116;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/117-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/117.svg">
          <img height="20px" alt="&#117;" src="https://dfuchslin.github.io/midpixels/svg/117.svg">
        </picture>
        0x75<br/>
        117<br/>
        &#117;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/118-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/118.svg">
          <img height="20px" alt="&#118;" src="https://dfuchslin.github.io/midpixels/svg/118.svg">
        </picture>
        0x76<br/>
        118<br/>
        &#118;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/119-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/119.svg">
          <img height="20px" alt="&#119;" src="https://dfuchslin.github.io/midpixels/svg/119.svg">
        </picture>
        0x77<br/>
        119<br/>
        &#119;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/120-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/120.svg">
          <img height="20px" alt="&#120;" src="https://dfuchslin.github.io/midpixels/svg/120.svg">
        </picture>
        0x78<br/>
        120<br/>
        &#120;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/121-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/121.svg">
          <img height="20px" alt="&#121;" src="https://dfuchslin.github.io/midpixels/svg/121.svg">
        </picture>
        0x79<br/>
        121<br/>
        &#121;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/122-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/122.svg">
          <img height="20px" alt="&#122;" src="https://dfuchslin.github.io/midpixels/svg/122.svg">
        </picture>
        0x7A<br/>
        122<br/>
        &#122;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/123-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/123.svg">
          <img height="20px" alt="&#123;" src="https://dfuchslin.github.io/midpixels/svg/123.svg">
        </picture>
        0x7B<br/>
        123<br/>
        &#123;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/124-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/124.svg">
          <img height="20px" alt="&#124;" src="https://dfuchslin.github.io/midpixels/svg/124.svg">
        </picture>
        0x7C<br/>
        124<br/>
        &#124;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/125-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/125.svg">
          <img height="20px" alt="&#125;" src="https://dfuchslin.github.io/midpixels/svg/125.svg">
        </picture>
        0x7D<br/>
        125<br/>
        &#125;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/126-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/126.svg">
          <img height="20px" alt="&#126;" src="https://dfuchslin.github.io/midpixels/svg/126.svg">
        </picture>
        0x7E<br/>
        126<br/>
        &#126;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/127-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/127.svg">
          <img height="20px" alt="&#1127;" src="https://dfuchslin.github.io/midpixels/svg/127.svg">
        </picture>
        0x7F<br/>
        1127<br/>
        &#1127;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/160-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/160.svg">
          <img height="20px" alt="&#1160;" src="https://dfuchslin.github.io/midpixels/svg/160.svg">
        </picture>
        0xA0<br/>
        1160<br/>
        &#1160;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/161-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/161.svg">
          <img height="20px" alt="&#161;" src="https://dfuchslin.github.io/midpixels/svg/161.svg">
        </picture>
        0xA1<br/>
        161<br/>
        &#161;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/162-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/162.svg">
          <img height="20px" alt="&#162;" src="https://dfuchslin.github.io/midpixels/svg/162.svg">
        </picture>
        0xA2<br/>
        162<br/>
        &#162;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/163-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/163.svg">
          <img height="20px" alt="&#163;" src="https://dfuchslin.github.io/midpixels/svg/163.svg">
        </picture>
        0xA3<br/>
        163<br/>
        &#163;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/164-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/164.svg">
          <img height="20px" alt="&#164;" src="https://dfuchslin.github.io/midpixels/svg/164.svg">
        </picture>
        0xA4<br/>
        164<br/>
        &#164;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/165-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/165.svg">
          <img height="20px" alt="&#165;" src="https://dfuchslin.github.io/midpixels/svg/165.svg">
        </picture>
        0xA5<br/>
        165<br/>
        &#165;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/166-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/166.svg">
          <img height="20px" alt="&#166;" src="https://dfuchslin.github.io/midpixels/svg/166.svg">
        </picture>
        0xA6<br/>
        166<br/>
        &#166;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/167-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/167.svg">
          <img height="20px" alt="&#167;" src="https://dfuchslin.github.io/midpixels/svg/167.svg">
        </picture>
        0xA7<br/>
        167<br/>
        &#167;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/168-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/168.svg">
          <img height="20px" alt="&#168;" src="https://dfuchslin.github.io/midpixels/svg/168.svg">
        </picture>
        0xA8<br/>
        168<br/>
        &#168;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/169-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/169.svg">
          <img height="20px" alt="&#169;" src="https://dfuchslin.github.io/midpixels/svg/169.svg">
        </picture>
        0xA9<br/>
        169<br/>
        &#169;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/170-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/170.svg">
          <img height="20px" alt="&#170;" src="https://dfuchslin.github.io/midpixels/svg/170.svg">
        </picture>
        0xAA<br/>
        170<br/>
        &#170;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/171-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/171.svg">
          <img height="20px" alt="&#171;" src="https://dfuchslin.github.io/midpixels/svg/171.svg">
        </picture>
        0xAB<br/>
        171<br/>
        &#171;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/172-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/172.svg">
          <img height="20px" alt="&#172;" src="https://dfuchslin.github.io/midpixels/svg/172.svg">
        </picture>
        0xAC<br/>
        172<br/>
        &#172;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/173-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/173.svg">
          <img height="20px" alt="&#1173;" src="https://dfuchslin.github.io/midpixels/svg/173.svg">
        </picture>
        0xAD<br/>
        1173<br/>
        &#1173;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/174-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/174.svg">
          <img height="20px" alt="&#174;" src="https://dfuchslin.github.io/midpixels/svg/174.svg">
        </picture>
        0xAE<br/>
        174<br/>
        &#174;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/175-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/175.svg">
          <img height="20px" alt="&#175;" src="https://dfuchslin.github.io/midpixels/svg/175.svg">
        </picture>
        0xAF<br/>
        175<br/>
        &#175;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/176-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/176.svg">
          <img height="20px" alt="&#176;" src="https://dfuchslin.github.io/midpixels/svg/176.svg">
        </picture>
        0xB0<br/>
        176<br/>
        &#176;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/177-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/177.svg">
          <img height="20px" alt="&#177;" src="https://dfuchslin.github.io/midpixels/svg/177.svg">
        </picture>
        0xB1<br/>
        177<br/>
        &#177;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/178-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/178.svg">
          <img height="20px" alt="&#178;" src="https://dfuchslin.github.io/midpixels/svg/178.svg">
        </picture>
        0xB2<br/>
        178<br/>
        &#178;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/179-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/179.svg">
          <img height="20px" alt="&#179;" src="https://dfuchslin.github.io/midpixels/svg/179.svg">
        </picture>
        0xB3<br/>
        179<br/>
        &#179;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/180-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/180.svg">
          <img height="20px" alt="&#180;" src="https://dfuchslin.github.io/midpixels/svg/180.svg">
        </picture>
        0xB4<br/>
        180<br/>
        &#180;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/181-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/181.svg">
          <img height="20px" alt="&#181;" src="https://dfuchslin.github.io/midpixels/svg/181.svg">
        </picture>
        0xB5<br/>
        181<br/>
        &#181;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/182-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/182.svg">
          <img height="20px" alt="&#182;" src="https://dfuchslin.github.io/midpixels/svg/182.svg">
        </picture>
        0xB6<br/>
        182<br/>
        &#182;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/183-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/183.svg">
          <img height="20px" alt="&#183;" src="https://dfuchslin.github.io/midpixels/svg/183.svg">
        </picture>
        0xB7<br/>
        183<br/>
        &#183;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/184-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/184.svg">
          <img height="20px" alt="&#184;" src="https://dfuchslin.github.io/midpixels/svg/184.svg">
        </picture>
        0xB8<br/>
        184<br/>
        &#184;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/185-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/185.svg">
          <img height="20px" alt="&#185;" src="https://dfuchslin.github.io/midpixels/svg/185.svg">
        </picture>
        0xB9<br/>
        185<br/>
        &#185;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/186-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/186.svg">
          <img height="20px" alt="&#186;" src="https://dfuchslin.github.io/midpixels/svg/186.svg">
        </picture>
        0xBA<br/>
        186<br/>
        &#186;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/187-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/187.svg">
          <img height="20px" alt="&#187;" src="https://dfuchslin.github.io/midpixels/svg/187.svg">
        </picture>
        0xBB<br/>
        187<br/>
        &#187;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/188-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/188.svg">
          <img height="20px" alt="&#188;" src="https://dfuchslin.github.io/midpixels/svg/188.svg">
        </picture>
        0xBC<br/>
        188<br/>
        &#188;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/189-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/189.svg">
          <img height="20px" alt="&#189;" src="https://dfuchslin.github.io/midpixels/svg/189.svg">
        </picture>
        0xBD<br/>
        189<br/>
        &#189;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/190-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/190.svg">
          <img height="20px" alt="&#190;" src="https://dfuchslin.github.io/midpixels/svg/190.svg">
        </picture>
        0xBE<br/>
        190<br/>
        &#190;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/191-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/191.svg">
          <img height="20px" alt="&#191;" src="https://dfuchslin.github.io/midpixels/svg/191.svg">
        </picture>
        0xBF<br/>
        191<br/>
        &#191;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/192-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/192.svg">
          <img height="20px" alt="&#192;" src="https://dfuchslin.github.io/midpixels/svg/192.svg">
        </picture>
        0xC0<br/>
        192<br/>
        &#192;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/193-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/193.svg">
          <img height="20px" alt="&#193;" src="https://dfuchslin.github.io/midpixels/svg/193.svg">
        </picture>
        0xC1<br/>
        193<br/>
        &#193;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/194-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/194.svg">
          <img height="20px" alt="&#194;" src="https://dfuchslin.github.io/midpixels/svg/194.svg">
        </picture>
        0xC2<br/>
        194<br/>
        &#194;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/195-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/195.svg">
          <img height="20px" alt="&#195;" src="https://dfuchslin.github.io/midpixels/svg/195.svg">
        </picture>
        0xC3<br/>
        195<br/>
        &#195;
      </td>
    </tr>
    <tr>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/196-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/196.svg">
          <img height="20px" alt="&#196;" src="https://dfuchslin.github.io/midpixels/svg/196.svg">
        </picture>
        0xC4<br/>
        196<br/>
        &#196;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/197-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/197.svg">
          <img height="20px" alt="&#197;" src="https://dfuchslin.github.io/midpixels/svg/197.svg">
        </picture>
        0xC5<br/>
        197<br/>
        &#197;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/198-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/198.svg">
          <img height="20px" alt="&#198;" src="https://dfuchslin.github.io/midpixels/svg/198.svg">
        </picture>
        0xC6<br/>
        198<br/>
        &#198;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/199-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/199.svg">
          <img height="20px" alt="&#199;" src="https://dfuchslin.github.io/midpixels/svg/199.svg">
        </picture>
        0xC7<br/>
        199<br/>
        &#199;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/200-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/200.svg">
          <img height="20px" alt="&#200;" src="https://dfuchslin.github.io/midpixels/svg/200.svg">
        </picture>
        0xC8<br/>
        200<br/>
        &#200;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/201-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/201.svg">
          <img height="20px" alt="&#201;" src="https://dfuchslin.github.io/midpixels/svg/201.svg">
        </picture>
        0xC9<br/>
        201<br/>
        &#201;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/202-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/202.svg">
          <img height="20px" alt="&#202;" src="https://dfuchslin.github.io/midpixels/svg/202.svg">
        </picture>
        0xCA<br/>
        202<br/>
        &#202;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/203-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/203.svg">
          <img height="20px" alt="&#203;" src="https://dfuchslin.github.io/midpixels/svg/203.svg">
        </picture>
        0xCB<br/>
        203<br/>
        &#203;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/204-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/204.svg">
          <img height="20px" alt="&#204;" src="https://dfuchslin.github.io/midpixels/svg/204.svg">
        </picture>
        0xCC<br/>
        204<br/>
        &#204;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/205-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/205.svg">
          <img height="20px" alt="&#205;" src="https://dfuchslin.github.io/midpixels/svg/205.svg">
        </picture>
        0xCD<br/>
        205<br/>
        &#205;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/206-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/206.svg">
          <img height="20px" alt="&#206;" src="https://dfuchslin.github.io/midpixels/svg/206.svg">
        </picture>
        0xCE<br/>
        206<br/>
        &#206;
      </td>
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/207-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/207.svg">
          <img height="20px" alt="&#207;" src="https://dfuchslin.github.io/midpixels/svg/207.svg">
        </picture>
        0xCF<br/>
        207<br/>
        &#207;
      </td>
    </tr>
  </tbody>
</table>

The table shows:
* Character/symbol example
* IBUS hex code point
* Font code point
* Normal font example at same code point (UTF-8)

---

## Background

Using a customized test harness (IBUS USB adapter, custom code), I sent all possible 8-bit values to a MID display and mapped the pixels for each character. There are a total of 144 displayable characters/symbols. See the pixel map in [characters.js](./src/characters.js).

## Building the font

Prerequisites:
* nodejs 18+

```bash
npm install
npm run build
```

Usable font files will be created in the `dist` directory. A sample/preview page is also created in the `dist` directory. Individual svg files will be created in the `dist/svg` directory.
