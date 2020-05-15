import { html } from 'lit-element';

import image from './FRP.jpg';
import imageUrl from './url.png';
import imageGithub from './github.png';

export const render = html`
    <cwc-learn-page header="Asynchronous Adventures">
        <div slot="header">
            <h1>Asynchronous Adventures</h1>
            <img src="${image}" />
        </div>
    </cwc-learn-page>
`;

export default render;