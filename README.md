# MID pixels

A custom 5x7 pixel font comprising all the characters and symbols displayed on the BMW Multi Information Display (MID) on E38 and E39 models. The characters are probably also in use on other IBUS LCD displays (instrument cluster, radio, etc). The character set matches the ASCII character set from characters 32 to 125 (A-Z, numbers, punctuation, etc). Above code point 125, the character set is custom and very specific to the symbols needed for displaying system controls such as volume, arrows, bars, and various symbols. Three of those upper code points (127, 160, and 173) are characters that do not display nicely in a font (control characters such as delete and soft-hyphen), so I have remapped those symbols to other code points in the font. Otherwise, the code points are the same for IBUS usage and in the font.

<!--<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/sample-dark.png">
  <img alt="Sample character set" src="./assets/sample-light.png">
</picture>-->

![Sample character set](./assets/sample-lcd.png)

## Character map

<table>
  <tbody>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/032.svg"/><br/>
        0x20<br/>
        32<br/>
        &nbsp;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/033.svg"/><br/>
        0x21<br/>
        33<br/>
        &#33;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/034.svg"/><br/>
        0x22<br/>
        34<br/>
        &#34;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/035.svg"/><br/>
        0x23<br/>
        35<br/>
        &#35;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/036.svg"/><br/>
        0x24<br/>
        36<br/>
        &#36;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/037.svg"/><br/>
        0x25<br/>
        37<br/>
        &#37;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/038.svg"/><br/>
        0x26<br/>
        38<br/>
        &#38;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/039.svg"/><br/>
        0x27<br/>
        39<br/>
        &#39;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/040.svg"/><br/>
        0x28<br/>
        40<br/>
        &#40;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/041.svg"/><br/>
        0x29<br/>
        41<br/>
        &#41;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/042.svg"/><br/>
        0x2A<br/>
        42<br/>
        &#42;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/043.svg"/><br/>
        0x2B<br/>
        43<br/>
        &#43;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/044.svg"/><br/>
        0x2C<br/>
        44<br/>
        &#44;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/045.svg"/><br/>
        0x2D<br/>
        45<br/>
        &#45;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/046.svg"/><br/>
        0x2E<br/>
        46<br/>
        &#46;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/047.svg"/><br/>
        0x2F<br/>
        47<br/>
        &#47;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/048.svg"/><br/>
        0x30<br/>
        48<br/>
        &#48;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/049.svg"/><br/>
        0x31<br/>
        49<br/>
        &#49;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/050.svg"/><br/>
        0x32<br/>
        50<br/>
        &#50;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/051.svg"/><br/>
        0x33<br/>
        51<br/>
        &#51;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/052.svg"/><br/>
        0x34<br/>
        52<br/>
        &#52;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/053.svg"/><br/>
        0x35<br/>
        53<br/>
        &#53;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/054.svg"/><br/>
        0x36<br/>
        54<br/>
        &#54;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/055.svg"/><br/>
        0x37<br/>
        55<br/>
        &#55;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/056.svg"/><br/>
        0x38<br/>
        56<br/>
        &#56;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/057.svg"/><br/>
        0x39<br/>
        57<br/>
        &#57;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/058.svg"/><br/>
        0x3A<br/>
        58<br/>
        &#58;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/059.svg"/><br/>
        0x3B<br/>
        59<br/>
        &#59;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/060.svg"/><br/>
        0x3C<br/>
        60<br/>
        &#60;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/061.svg"/><br/>
        0x3D<br/>
        61<br/>
        &#61;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/062.svg"/><br/>
        0x3E<br/>
        62<br/>
        &#62;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/063.svg"/><br/>
        0x3F<br/>
        63<br/>
        &#63;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/064.svg"/><br/>
        0x40<br/>
        64<br/>
        &#64;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/065.svg"/><br/>
        0x41<br/>
        65<br/>
        &#65;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/066.svg"/><br/>
        0x42<br/>
        66<br/>
        &#66;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/067.svg"/><br/>
        0x43<br/>
        67<br/>
        &#67;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/068.svg"/><br/>
        0x44<br/>
        68<br/>
        &#68;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/069.svg"/><br/>
        0x45<br/>
        69<br/>
        &#69;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/070.svg"/><br/>
        0x46<br/>
        70<br/>
        &#70;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/071.svg"/><br/>
        0x47<br/>
        71<br/>
        &#71;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/072.svg"/><br/>
        0x48<br/>
        72<br/>
        &#72;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/073.svg"/><br/>
        0x49<br/>
        73<br/>
        &#73;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/074.svg"/><br/>
        0x4A<br/>
        74<br/>
        &#74;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/075.svg"/><br/>
        0x4B<br/>
        75<br/>
        &#75;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/076.svg"/><br/>
        0x4C<br/>
        76<br/>
        &#76;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/077.svg"/><br/>
        0x4D<br/>
        77<br/>
        &#77;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/078.svg"/><br/>
        0x4E<br/>
        78<br/>
        &#78;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/079.svg"/><br/>
        0x4F<br/>
        79<br/>
        &#79;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/080.svg"/><br/>
        0x50<br/>
        80<br/>
        &#80;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/081.svg"/><br/>
        0x51<br/>
        81<br/>
        &#81;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/082.svg"/><br/>
        0x52<br/>
        82<br/>
        &#82;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/083.svg"/><br/>
        0x53<br/>
        83<br/>
        &#83;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/084.svg"/><br/>
        0x54<br/>
        84<br/>
        &#84;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/085.svg"/><br/>
        0x55<br/>
        85<br/>
        &#85;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/086.svg"/><br/>
        0x56<br/>
        86<br/>
        &#86;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/087.svg"/><br/>
        0x57<br/>
        87<br/>
        &#87;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/088.svg"/><br/>
        0x58<br/>
        88<br/>
        &#88;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/089.svg"/><br/>
        0x59<br/>
        89<br/>
        &#89;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/090.svg"/><br/>
        0x5A<br/>
        90<br/>
        &#90;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/091.svg"/><br/>
        0x5B<br/>
        91<br/>
        &#91;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/092.svg"/><br/>
        0x5C<br/>
        92<br/>
        &#92;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/093.svg"/><br/>
        0x5D<br/>
        93<br/>
        &#93;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/094.svg"/><br/>
        0x5E<br/>
        94<br/>
        &#94;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/095.svg"/><br/>
        0x5F<br/>
        95<br/>
        &#95;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/096.svg"/><br/>
        0x60<br/>
        96<br/>
        &#96;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/097.svg"/><br/>
        0x61<br/>
        97<br/>
        &#97;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/098.svg"/><br/>
        0x62<br/>
        98<br/>
        &#98;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/099.svg"/><br/>
        0x63<br/>
        99<br/>
        &#99;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/100.svg"/><br/>
        0x64<br/>
        100<br/>
        &#100;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/101.svg"/><br/>
        0x65<br/>
        101<br/>
        &#101;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/102.svg"/><br/>
        0x66<br/>
        102<br/>
        &#102;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/103.svg"/><br/>
        0x67<br/>
        103<br/>
        &#103;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/104.svg"/><br/>
        0x68<br/>
        104<br/>
        &#104;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/105.svg"/><br/>
        0x69<br/>
        105<br/>
        &#105;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/106.svg"/><br/>
        0x6A<br/>
        106<br/>
        &#106;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/107.svg"/><br/>
        0x6B<br/>
        107<br/>
        &#107;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/108.svg"/><br/>
        0x6C<br/>
        108<br/>
        &#108;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/109.svg"/><br/>
        0x6D<br/>
        109<br/>
        &#109;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/110.svg"/><br/>
        0x6E<br/>
        110<br/>
        &#110;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/111.svg"/><br/>
        0x6F<br/>
        111<br/>
        &#111;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/112.svg"/><br/>
        0x70<br/>
        112<br/>
        &#112;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/113.svg"/><br/>
        0x71<br/>
        113<br/>
        &#113;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/114.svg"/><br/>
        0x72<br/>
        114<br/>
        &#114;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/115.svg"/><br/>
        0x73<br/>
        115<br/>
        &#115;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/116.svg"/><br/>
        0x74<br/>
        116<br/>
        &#116;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/117.svg"/><br/>
        0x75<br/>
        117<br/>
        &#117;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/118.svg"/><br/>
        0x76<br/>
        118<br/>
        &#118;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/119.svg"/><br/>
        0x77<br/>
        119<br/>
        &#119;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/120.svg"/><br/>
        0x78<br/>
        120<br/>
        &#120;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/121.svg"/><br/>
        0x79<br/>
        121<br/>
        &#121;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/122.svg"/><br/>
        0x7A<br/>
        122<br/>
        &#122;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/123.svg"/><br/>
        0x7B<br/>
        123<br/>
        &#123;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/124.svg"/><br/>
        0x7C<br/>
        124<br/>
        &#124;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/125.svg"/><br/>
        0x7D<br/>
        125<br/>
        &#125;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/126.svg"/><br/>
        0x7E<br/>
        126<br/>
        &#126;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/127.svg"/><br/>
        0x7F<br/>
        1127<br/>
        &#1127;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/160.svg"/><br/>
        0xA0<br/>
        1160<br/>
        &#1160;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/161.svg"/><br/>
        0xA1<br/>
        161<br/>
        &#161;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/162.svg"/><br/>
        0xA2<br/>
        162<br/>
        &#162;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/163.svg"/><br/>
        0xA3<br/>
        163<br/>
        &#163;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/164.svg"/><br/>
        0xA4<br/>
        164<br/>
        &#164;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/165.svg"/><br/>
        0xA5<br/>
        165<br/>
        &#165;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/166.svg"/><br/>
        0xA6<br/>
        166<br/>
        &#166;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/167.svg"/><br/>
        0xA7<br/>
        167<br/>
        &#167;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/168.svg"/><br/>
        0xA8<br/>
        168<br/>
        &#168;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/169.svg"/><br/>
        0xA9<br/>
        169<br/>
        &#169;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/170.svg"/><br/>
        0xAA<br/>
        170<br/>
        &#170;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/171.svg"/><br/>
        0xAB<br/>
        171<br/>
        &#171;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/172.svg"/><br/>
        0xAC<br/>
        172<br/>
        &#172;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/173.svg"/><br/>
        0xAD<br/>
        1173<br/>
        &#1173;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/174.svg"/><br/>
        0xAE<br/>
        174<br/>
        &#174;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/175.svg"/><br/>
        0xAF<br/>
        175<br/>
        &#175;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/176.svg"/><br/>
        0xB0<br/>
        176<br/>
        &#176;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/177.svg"/><br/>
        0xB1<br/>
        177<br/>
        &#177;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/178.svg"/><br/>
        0xB2<br/>
        178<br/>
        &#178;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/179.svg"/><br/>
        0xB3<br/>
        179<br/>
        &#179;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/180.svg"/><br/>
        0xB4<br/>
        180<br/>
        &#180;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/181.svg"/><br/>
        0xB5<br/>
        181<br/>
        &#181;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/182.svg"/><br/>
        0xB6<br/>
        182<br/>
        &#182;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/183.svg"/><br/>
        0xB7<br/>
        183<br/>
        &#183;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/184.svg"/><br/>
        0xB8<br/>
        184<br/>
        &#184;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/185.svg"/><br/>
        0xB9<br/>
        185<br/>
        &#185;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/186.svg"/><br/>
        0xBA<br/>
        186<br/>
        &#186;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/187.svg"/><br/>
        0xBB<br/>
        187<br/>
        &#187;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/188.svg"/><br/>
        0xBC<br/>
        188<br/>
        &#188;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/189.svg"/><br/>
        0xBD<br/>
        189<br/>
        &#189;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/190.svg"/><br/>
        0xBE<br/>
        190<br/>
        &#190;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/191.svg"/><br/>
        0xBF<br/>
        191<br/>
        &#191;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/192.svg"/><br/>
        0xC0<br/>
        192<br/>
        &#192;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/193.svg"/><br/>
        0xC1<br/>
        193<br/>
        &#193;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/194.svg"/><br/>
        0xC2<br/>
        194<br/>
        &#194;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/195.svg"/><br/>
        0xC3<br/>
        195<br/>
        &#195;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/196.svg"/><br/>
        0xC4<br/>
        196<br/>
        &#196;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/197.svg"/><br/>
        0xC5<br/>
        197<br/>
        &#197;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/198.svg"/><br/>
        0xC6<br/>
        198<br/>
        &#198;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/199.svg"/><br/>
        0xC7<br/>
        199<br/>
        &#199;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/200.svg"/><br/>
        0xC8<br/>
        200<br/>
        &#200;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/201.svg"/><br/>
        0xC9<br/>
        201<br/>
        &#201;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/202.svg"/><br/>
        0xCA<br/>
        202<br/>
        &#202;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/203.svg"/><br/>
        0xCB<br/>
        203<br/>
        &#203;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/204.svg"/><br/>
        0xCC<br/>
        204<br/>
        &#204;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/205.svg"/><br/>
        0xCD<br/>
        205<br/>
        &#205;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/206.svg"/><br/>
        0xCE<br/>
        206<br/>
        &#206;
      </td>
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/207.svg"/><br/>
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

