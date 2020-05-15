import { html } from 'lit-element';

import image from './hell.png';

export const render = html`
    <cwc-learn-page>
        <div slot="header">
            <h1>Callback hell - Pyramid of Doom</h1>
            <h2>Now imagine adding exception handlers for each function...</h2>
            <img slot="" src="${image}" />
        </div>
    </cwc-learn-page>
`;

export default render;