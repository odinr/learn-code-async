import { html } from 'lit-element';

import image from './benefits.png';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <h1>Promises</h1>
            <img slot="" src="${image}" />
        </header>
    </cwc-learn-page>
`;

export default render;