/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MyElement extends LitElement {
  /**
   * @function styles get the styles of web component
   * @memberof MyElement
   * @static
   */
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  /**
   * @function properties of current web component
   * @memberof MyElement
   * @returns {Object}
   * @static
   */
  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  /**
   * Constructor of My Element
   */
  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  /**
   * Paint web component
   * @returns Html TemplateResult
   * @public
   */
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this.onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  /**
   * Click event attach to button
   * @returns void
   * @private
   */
  onClick() {
    this.count += 1;
  }
}

window.customElements.define('my-element', MyElement);

export default MyElement;

/**
 * Bed name
 *
 * @type {string}
 */
const bed = '3';

/**
 * Show number of beds
 * @param {string} bedNumber number of beds
 * @public
 */
function showBed(bedNumber) {
  console.log(bedNumber);
}

showBed(bed);
