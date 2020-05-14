import { html } from 'lit-element';

import image from './marty.jpg';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <h1>Async / Await</h1>
            <img slot="" src="${image}" />
        </header>
    </cwc-learn-page>
`;

export default render;