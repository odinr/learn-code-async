import { html } from 'lit-element';

import imageThen from './andthen.gif';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <h1>Promise Hell</h1>
            <mdc-grid-cell desktop="6"><img src="${imageThen}" /></mdc-grid-cell>
        </header>
        <mdc-grid-inner>
        </mdc-grid-inner>
    </cwc-learn-page>
`;

export default render;