import { html } from "lit-element";

import image from './wa.jpg';

export const render = html`
    <cwc-learn-page header="Async != Multithread">
        <img src="${image}" />
    </cwc-learn-page>
`;

export default render;