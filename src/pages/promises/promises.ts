import { html } from 'lit-element';

import image from './benefits.png';

export const render = html`
    <cwc-learn-page>
        <div slot="header">
            <h1>Promises</h1>
            <img slot="" src="${image}" />
        </div>
        <div slot="lead">
        <strong>A promise has 3 states:</strong>
            <ul>
                <li><em>Pending:</em> You don't know if you will a raise</li>
                <li><em>Fulfilled:</em> Boss is happy, so you get a raise</li>
                <li><em>Rejected:</em> Corona happend, no raise</li>
            </ul>
        </div>
    </cwc-learn-page>
`;

export default render;