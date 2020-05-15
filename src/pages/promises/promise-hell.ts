import { html } from 'lit-element';

import imageThen from './andthen.gif';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <h1>I had a callback hell, so i thought to use promises...</h1>
            <mdc-grid-cell desktop="6"><img src="${imageThen}" /></mdc-grid-cell>
        </header>
        <div slot="lead">
            <h2>Now i have promise hell</h2>
        </div>
    </cwc-learn-page>
`;

export default render;