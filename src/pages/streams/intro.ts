import { html } from 'lit-element';

import image from './marble.png';

export const render = html`
    <cwc-learn-page>
        <div slot="header">
            <h1>Streams</h1>
            <img src="${image}"/>
        </div>
    </cwc-learn-page>
`;

export default render;