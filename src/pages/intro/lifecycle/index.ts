import { html } from 'lit-element';

import image from './async.jpg';

export const render = html`
    <cwc-learn-page header="Lifecycle">
        <div slot="header">
            <h1>Lifecycle</h1>
            <img src="${image}" />
        </div>
        <div slot="lead">
            <p>
                When Node.js starts, it initializes the event loop, 
                processes the provided input script which may make async API calls, 
                schedule timers, or call <code>process.nextTick()</code>, then begins processing the event loop.
            </p>
            <p>Each phase has a <abbr title="First In First Out">FIFO</abbr> queue of callbacks to execute.</p>
        </div>
    </cwc-learn-page>
`;

export default render;