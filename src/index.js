import {LitElement, html} from '@polymer/lit-element';
import retargetEvents from 'react-shadow-dom-retarget-events';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import {StyleSheetManager} from "styled-components"

import App from './app.js';

class MyWebComponent extends LitElement {
  constructor() {
    super();
    //this.attachShadow({mode: 'open'});
  }

  getShadowDom() {
    return `<slot></slot>`;
  }

  render() {
    const shadowDom = this.getShadowDom();
    const mountPoint = document.createElement('span');
    const styleContainer = document.createElement("div");
      ReactDOM.render(
          <StyleSheetManager target={styleContainer}>
            <App />
          </StyleSheetManager>, mountPoint);

    this.shadowRoot.appendChild(styleContainer);
    this.shadowRoot.appendChild(mountPoint);
    retargetEvents(this.shadowRoot);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-webcomponent', MyWebComponent);


const container = document.createElement('app');
document.body.appendChild(container);

// Add shadow root to component.
const shadow = document.querySelector('app').createShadowRoot({ mode: 'open' });
const styleContainer = document.createElement("div");
shadow.appendChild(styleContainer);

// Select the web component, then the shadowRoot.
const target = document.querySelector('app').shadowRoot;

ReactDOM.render(<StyleSheetManager target={styleContainer}>
    <App />
</StyleSheetManager>, target);