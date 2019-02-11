import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import {StyleSheetManager} from "styled-components"

import App from './app.js';

class MyWebComponent extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Add shadow root to component.
        const shadow = this.attachShadow({ mode: 'open' });
        const props = JSON.parse(this.getAttribute("appConfig"));

        // Select the web component, then the shadowRoot
        ReactDOM.render(<StyleSheetManager target={shadow}>
            <App {...props}/>
        </StyleSheetManager>, shadow);
    }
}
customElements.define('my-webcomponent', MyWebComponent);