<table>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this as |character|}}
      <td align="center">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://dfuchslin.github.io/midpixels/svg/{{character.padded_id}}-dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://dfuchslin.github.io/midpixels/svg/{{character.padded_id}}.svg">
          <img height="20px" alt="{{{character.sample}}}" src="https://dfuchslin.github.io/midpixels/svg/{{character.padded_id}}.svg">
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
