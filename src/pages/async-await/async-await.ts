import { html } from 'lit-element';

import image from './async-await.jpg';

export const render = html`
    <cwc-learn-page>
        <header slot="header">
            <img slot="" src="${image}" />
        </header>
        <div slot="lead">
            <p>
                Async functions enable us to write promise based code as if it were synchronous, 
                but without blocking the execution thread. 
            </p>
            <p>
                It operates asynchronously via the event-loop. 
            </p>
            <p>
                Async functions will always return a value. 
            </p>
            <p>    
                Using async simply implies that a promise will be returned, and if a promise is not returned, 
                JavaScript automatically wraps it in a resolved promise with its value.
            </p>
        </div>
    </cwc-learn-page>
`;

export default render;