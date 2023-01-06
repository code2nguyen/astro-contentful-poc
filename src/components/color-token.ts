import { LitElement, html, css } from "lit";

import { customElement, property } from "lit/decorators.js";

const tagName = "fds-color-token";

@customElement("fds-color-token")
export class ColorToken extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-direction: column;
      padding: 16px;
    }
    .fds-color-token {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: var(--fds-color-token-value);
    }

    .content {
    }
  `;

  @property() value = "";

  render() {
    return html`<div
        class="fds-color-token"
        style=${`--fds-color-token-value: ${this.value};`}
      ></div>
      <div class="content">${this.value}</div> `;
  }
}
