# MID pixels

A custom 5x7 pixel font comprising all the characters and symbols displayed on the BMW Multi Information Display (MID) on E38 and E39 models. The characters might also be in use on other I-BUS LCD displays (instrument cluster, radio, etc). The character set is custom and matches the ASCII character set from characters 32 to 125. Above code point 125, the character set is custom and very specific to the symbols needed for displaying system controls such as volume, arrows, bars, and various symbols. Two of the used code points (127 and 173) are control characters that do not display in a font (delete and soft-hyphen, respectively), so I have remapped those two symbols to other code points in the font. Otherwise, the code points are the same for IBUS usage and in the font.

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
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#32"/><br/>
        0x20<br/>
        32<br/>
        &#32;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#33"/><br/>
        0x20<br/>
        33<br/>
        &#33;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#34"/><br/>
        0x20<br/>
        34<br/>
        &#34;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#35"/><br/>
        0x20<br/>
        35<br/>
        &#35;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#36"/><br/>
        0x20<br/>
        36<br/>
        &#36;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#37"/><br/>
        0x20<br/>
        37<br/>
        &#37;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#38"/><br/>
        0x20<br/>
        38<br/>
        &#38;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#39"/><br/>
        0x20<br/>
        39<br/>
        &#39;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#40"/><br/>
        0x20<br/>
        40<br/>
        &#40;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#41"/><br/>
        0x20<br/>
        41<br/>
        &#41;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#42"/><br/>
        0x20<br/>
        42<br/>
        &#42;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#43"/><br/>
        0x20<br/>
        43<br/>
        &#43;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#44"/><br/>
        0x20<br/>
        44<br/>
        &#44;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#45"/><br/>
        0x20<br/>
        45<br/>
        &#45;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#46"/><br/>
        0x20<br/>
        46<br/>
        &#46;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#47"/><br/>
        0x20<br/>
        47<br/>
        &#47;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#48"/><br/>
        0x20<br/>
        48<br/>
        &#48;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#49"/><br/>
        0x20<br/>
        49<br/>
        &#49;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#50"/><br/>
        0x20<br/>
        50<br/>
        &#50;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#51"/><br/>
        0x20<br/>
        51<br/>
        &#51;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#52"/><br/>
        0x20<br/>
        52<br/>
        &#52;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#53"/><br/>
        0x20<br/>
        53<br/>
        &#53;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#54"/><br/>
        0x20<br/>
        54<br/>
        &#54;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#55"/><br/>
        0x20<br/>
        55<br/>
        &#55;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#56"/><br/>
        0x20<br/>
        56<br/>
        &#56;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#57"/><br/>
        0x20<br/>
        57<br/>
        &#57;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#58"/><br/>
        0x20<br/>
        58<br/>
        &#58;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#59"/><br/>
        0x20<br/>
        59<br/>
        &#59;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#60"/><br/>
        0x20<br/>
        60<br/>
        &#60;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#61"/><br/>
        0x20<br/>
        61<br/>
        &#61;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#62"/><br/>
        0x20<br/>
        62<br/>
        &#62;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#63"/><br/>
        0x20<br/>
        63<br/>
        &#63;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#64"/><br/>
        0x20<br/>
        64<br/>
        &#64;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#65"/><br/>
        0x20<br/>
        65<br/>
        &#65;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#66"/><br/>
        0x20<br/>
        66<br/>
        &#66;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#67"/><br/>
        0x20<br/>
        67<br/>
        &#67;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#68"/><br/>
        0x20<br/>
        68<br/>
        &#68;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#69"/><br/>
        0x20<br/>
        69<br/>
        &#69;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#70"/><br/>
        0x20<br/>
        70<br/>
        &#70;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#71"/><br/>
        0x20<br/>
        71<br/>
        &#71;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#72"/><br/>
        0x20<br/>
        72<br/>
        &#72;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#73"/><br/>
        0x20<br/>
        73<br/>
        &#73;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#74"/><br/>
        0x20<br/>
        74<br/>
        &#74;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#75"/><br/>
        0x20<br/>
        75<br/>
        &#75;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#76"/><br/>
        0x20<br/>
        76<br/>
        &#76;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#77"/><br/>
        0x20<br/>
        77<br/>
        &#77;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#78"/><br/>
        0x20<br/>
        78<br/>
        &#78;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#79"/><br/>
        0x20<br/>
        79<br/>
        &#79;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#80"/><br/>
        0x20<br/>
        80<br/>
        &#80;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#81"/><br/>
        0x20<br/>
        81<br/>
        &#81;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#82"/><br/>
        0x20<br/>
        82<br/>
        &#82;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#83"/><br/>
        0x20<br/>
        83<br/>
        &#83;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#84"/><br/>
        0x20<br/>
        84<br/>
        &#84;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#85"/><br/>
        0x20<br/>
        85<br/>
        &#85;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#86"/><br/>
        0x20<br/>
        86<br/>
        &#86;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#87"/><br/>
        0x20<br/>
        87<br/>
        &#87;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#88"/><br/>
        0x20<br/>
        88<br/>
        &#88;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#89"/><br/>
        0x20<br/>
        89<br/>
        &#89;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#90"/><br/>
        0x20<br/>
        90<br/>
        &#90;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#91"/><br/>
        0x20<br/>
        91<br/>
        &#91;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#92"/><br/>
        0x20<br/>
        92<br/>
        &#92;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#93"/><br/>
        0x20<br/>
        93<br/>
        &#93;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#94"/><br/>
        0x20<br/>
        94<br/>
        &#94;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#95"/><br/>
        0x20<br/>
        95<br/>
        &#95;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#96"/><br/>
        0x20<br/>
        96<br/>
        &#96;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#97"/><br/>
        0x20<br/>
        97<br/>
        &#97;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#98"/><br/>
        0x20<br/>
        98<br/>
        &#98;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#99"/><br/>
        0x20<br/>
        99<br/>
        &#99;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#100"/><br/>
        0x20<br/>
        100<br/>
        &#100;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#101"/><br/>
        0x20<br/>
        101<br/>
        &#101;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#102"/><br/>
        0x20<br/>
        102<br/>
        &#102;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#103"/><br/>
        0x20<br/>
        103<br/>
        &#103;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#104"/><br/>
        0x20<br/>
        104<br/>
        &#104;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#105"/><br/>
        0x20<br/>
        105<br/>
        &#105;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#106"/><br/>
        0x20<br/>
        106<br/>
        &#106;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#107"/><br/>
        0x20<br/>
        107<br/>
        &#107;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#108"/><br/>
        0x20<br/>
        108<br/>
        &#108;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#109"/><br/>
        0x20<br/>
        109<br/>
        &#109;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#110"/><br/>
        0x20<br/>
        110<br/>
        &#110;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#111"/><br/>
        0x20<br/>
        111<br/>
        &#111;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#112"/><br/>
        0x20<br/>
        112<br/>
        &#112;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#113"/><br/>
        0x20<br/>
        113<br/>
        &#113;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#114"/><br/>
        0x20<br/>
        114<br/>
        &#114;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#115"/><br/>
        0x20<br/>
        115<br/>
        &#115;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#116"/><br/>
        0x20<br/>
        116<br/>
        &#116;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#117"/><br/>
        0x20<br/>
        117<br/>
        &#117;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#118"/><br/>
        0x20<br/>
        118<br/>
        &#118;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#119"/><br/>
        0x20<br/>
        119<br/>
        &#119;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#120"/><br/>
        0x20<br/>
        120<br/>
        &#120;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#121"/><br/>
        0x20<br/>
        121<br/>
        &#121;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#122"/><br/>
        0x20<br/>
        122<br/>
        &#122;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#123"/><br/>
        0x20<br/>
        123<br/>
        &#123;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#124"/><br/>
        0x20<br/>
        124<br/>
        &#124;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#125"/><br/>
        0x20<br/>
        125<br/>
        &#125;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#126"/><br/>
        0x20<br/>
        126<br/>
        &#126;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#127"/><br/>
        0x20<br/>
        1127<br/>
        &#1127;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#160"/><br/>
        0x20<br/>
        160<br/>
        &#160;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#161"/><br/>
        0x20<br/>
        161<br/>
        &#161;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#162"/><br/>
        0x20<br/>
        162<br/>
        &#162;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#163"/><br/>
        0x20<br/>
        163<br/>
        &#163;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#164"/><br/>
        0x20<br/>
        164<br/>
        &#164;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#165"/><br/>
        0x20<br/>
        165<br/>
        &#165;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#166"/><br/>
        0x20<br/>
        166<br/>
        &#166;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#167"/><br/>
        0x20<br/>
        167<br/>
        &#167;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#168"/><br/>
        0x20<br/>
        168<br/>
        &#168;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#169"/><br/>
        0x20<br/>
        169<br/>
        &#169;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#170"/><br/>
        0x20<br/>
        170<br/>
        &#170;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#171"/><br/>
        0x20<br/>
        171<br/>
        &#171;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#172"/><br/>
        0x20<br/>
        172<br/>
        &#172;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#173"/><br/>
        0x20<br/>
        1173<br/>
        &#1173;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#174"/><br/>
        0x20<br/>
        174<br/>
        &#174;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#175"/><br/>
        0x20<br/>
        175<br/>
        &#175;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#176"/><br/>
        0x20<br/>
        176<br/>
        &#176;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#177"/><br/>
        0x20<br/>
        177<br/>
        &#177;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#178"/><br/>
        0x20<br/>
        178<br/>
        &#178;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#179"/><br/>
        0x20<br/>
        179<br/>
        &#179;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#180"/><br/>
        0x20<br/>
        180<br/>
        &#180;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#181"/><br/>
        0x20<br/>
        181<br/>
        &#181;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#182"/><br/>
        0x20<br/>
        182<br/>
        &#182;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#183"/><br/>
        0x20<br/>
        183<br/>
        &#183;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#184"/><br/>
        0x20<br/>
        184<br/>
        &#184;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#185"/><br/>
        0x20<br/>
        185<br/>
        &#185;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#186"/><br/>
        0x20<br/>
        186<br/>
        &#186;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#187"/><br/>
        0x20<br/>
        187<br/>
        &#187;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#188"/><br/>
        0x20<br/>
        188<br/>
        &#188;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#189"/><br/>
        0x20<br/>
        189<br/>
        &#189;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#190"/><br/>
        0x20<br/>
        190<br/>
        &#190;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#191"/><br/>
        0x20<br/>
        191<br/>
        &#191;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#192"/><br/>
        0x20<br/>
        192<br/>
        &#192;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#193"/><br/>
        0x20<br/>
        193<br/>
        &#193;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#194"/><br/>
        0x20<br/>
        194<br/>
        &#194;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#195"/><br/>
        0x20<br/>
        195<br/>
        &#195;
      </td>
    </tr>
    <tr>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#196"/><br/>
        0x20<br/>
        196<br/>
        &#196;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#197"/><br/>
        0x20<br/>
        197<br/>
        &#197;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#198"/><br/>
        0x20<br/>
        198<br/>
        &#198;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#199"/><br/>
        0x20<br/>
        199<br/>
        &#199;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#200"/><br/>
        0x20<br/>
        200<br/>
        &#200;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#201"/><br/>
        0x20<br/>
        201<br/>
        &#201;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#202"/><br/>
        0x20<br/>
        202<br/>
        &#202;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#203"/><br/>
        0x20<br/>
        203<br/>
        &#203;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#204"/><br/>
        0x20<br/>
        204<br/>
        &#204;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#205"/><br/>
        0x20<br/>
        205<br/>
        &#205;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#206"/><br/>
        0x20<br/>
        206<br/>
        &#206;
      </td>
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#207"/><br/>
        0x20<br/>
        207<br/>
        &#207;
      </td>
    </tr>
  </tbody>
</table>

## Background

Using a customized test harness (ibus usb adapter, custom code), I sent all possible 8-bit values to a MID display and mapped the pixels for each character. There are a total of 144 displayable characters/symbols. See the map in [characters.js](./src/characters.js).

## Building the font

Prerequisites:
* nodejs 18+

```bash
npm install
npm run build
```

Individual svg files will be created in the `svg` directory. Usable font files will be created in the `dist` directory. A sample/preview page is also created in the `dist` directory.

