<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <img height="20px" src="./assets/midpixels.svg#{{character.id}}"/><br/>
        {{character.hex}}<br/>
        {{character.codepoint}}<br/>
        {{{character.sample}}}
      </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
</table>
