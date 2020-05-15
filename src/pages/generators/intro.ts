import { html } from 'lit-element';

import image from './codin.png';

export const render = html`
    <cwc-learn-page>
        <style>
            img{
                max-width: 600px !important;
                /* width: auto !important; */
            }
        </style>
        <div slot="header">
            <h1>Asynchronous Itterators and Generators</h1>
            <img src="${image}"/>
        </div>
    </cwc-learn-page>
`;

export default render;