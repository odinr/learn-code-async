import { html } from 'lit-element';

import image from './hell.png';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <h1>Callback hell - Pyramid of Doom</h1>
            <img slot="" src="${image}" />
        </header>
        <mdc-grid-inner>
            <mdc-grid-cell align="middle">
                <p>Now imagine adding exception handlers for each function...</p>
                <p>Callbacks are hard to <strong>read, maintain, handle, debug, refactor</strong></p>
            </mdc-grid-cell>
        </mdc-grid-inner>
    </cwc-learn-page>
`;

export default render;