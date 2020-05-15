import { html } from "lit-element";

import image from './wa.jpg';

export const render = html`
    <cwc-learn-page header="Async != Multithread">
        <div slot="header">
            <h1>Async != Multithread</h1>
            <img src="${image}" />
        </div>
        <div slot="lead">
            <p>Just because a language is asynchronous does not mean it is multithreaded</p>
            <p><i>Just like RL; find a friend and ask him to do the heavy lifting</i></p>
        </div>

    </cwc-learn-page>
`;

export default render;