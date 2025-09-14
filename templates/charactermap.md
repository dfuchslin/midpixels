<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/png/{{character.padded_id}}-dark.png">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/png/{{character.padded_id}}.png">
          <img height="20px" alt="{{{character.sample}}}" src="https://dfuchslin.github.io/midpixels/png/{{character.padded_id}}.png">
        </picture>
        {{character.hex}}<br/>
        {{character.codepoint}}<br/>
        {{{character.sample}}}
      </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
</table>
