<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <img height="20px" src="https://dfuchslin.github.io/midpixels/svg/{{character.padded_id}}.svg"/><br/>
        {{character.hex}}<br/>
        {{character.codepoint}}<br/>
        {{{character.sample}}}
      </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
</table>
