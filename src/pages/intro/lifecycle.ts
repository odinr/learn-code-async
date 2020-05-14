import { html } from 'lit-element';

import image from './async.jpg';

export const render = html`
    <cwc-learn-page header="Lifecycle">
        <img src="${image}" />
    </cwc-learn-page>
`;

export default render;