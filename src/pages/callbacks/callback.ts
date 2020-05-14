import { html } from 'lit-element';

import image from './callback-function.png';

export const render = html`
    <cwc-learn-page>
        <div slot="header">
            <h1>Calbacks</h1>
            <img slot="" src="${image}" />
        </header>
    </cwc-learn-page>
`;

export default render;