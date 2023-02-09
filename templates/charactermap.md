<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <img height="20px" alt="0x20" src="./assets/midpixels.svg#{{character.id}}"/><br/>
        0x20<br/>
        {{#with character.codepoint}}
        {{character.codepoint}}<br/>
        &#{{character.codepoint}};
        {{else}}
        {{character.id}}<br/>
        &#{{character.id}};
        {{/with}}
      </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
</table>
