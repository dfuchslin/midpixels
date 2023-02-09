<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <img height="20px" src="./assets/midpixels.svg#{{character.id}}"/><br/>
        {{character.hex}}<br/>
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
