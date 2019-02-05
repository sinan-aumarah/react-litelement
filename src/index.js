import {LitElement, html} from '@polymer/lit-element';
import retargetEvents from 'react-shadow-dom-retarget-events';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app.js';

class MyWebComponent extends LitElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  getShadowDom() {
    return `<slot></slot>`;
  }

  connectedCallback() {
    const shadowDom = this.getShadowDom();
    const mountPoint = document.createElement('span');
    ReactDOM.render(<App />, mountPoint);
    this.shadowRoot.appendChild(mountPoint);
    retargetEvents(this.shadowRoot);
  }

}

customElements.define('my-webcomponent', MyWebComponent);
