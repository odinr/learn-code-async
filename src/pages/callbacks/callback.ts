import { html } from 'lit-element';

import image from './callback-function.png';

export const render = html`
    <cwc-learn-page>
        <div slot="header">
            <img src="${image}" />
        </div>
        <div slot="lead">
            <p>
            <i>A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.</i>
            <br/>
            <br/>
                In JavaScript, functions are objects. 
                Because of this, functions can take functions as arguments, 
                and can be returned by other functions. 
                Functions that do this are called <em>higher-order</em> functions. 
                Any function that is passed as an argument is called a <em>callback function</em>.
            </p>
        </div>
    </cwc-learn-page>
`;

export default render;