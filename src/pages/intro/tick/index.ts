import { html, customElement, query } from 'lit-element';

import image from './the_tick.jpg';
import { PageElement } from '../../../components';
import { repeat } from 'lit-html/directives/repeat';

import style from './tick.scss';

const gg = [
    {
        title: 'Timers',
        secondary: html`this phase executes callbacks scheduled by <code>setTimeout()</code> and <code>setInterval()</code>`
    },
    {
        title: 'Pending callbacks',
        secondary: html`executes I/O callbacks deferred to the next loop iteration`
    },
    {
        title: 'Idle & Prepare',
        secondary: html`only used internally`
    },
    {
        title: 'Poll',
        secondary: html`retrieve new I/O events<br/> execute I/O related callbacks <i>except of close callbacks, timers and setImmediate</i><br/> Node will block here when appropriate`
    },
    {
        title: 'Check',
        secondary: html`<code>setImmediate()</code> callbacks are invoked here</code>`
    },
    {
        title: 'Close callbacks',
        secondary: html`some close callbacks, e.g. <code>socket.on('close', ...)</code>`
    },
]

@customElement('cwc-learn-page-code-tick')
class CodePageTick extends PageElement {
    static styles = PageElement.styles.concat(style);


    @query('li.active')
    activeStep?: HTMLElement;

    renderMain() {
        return html`
            <mdc-grid-cell>
                <ul>
                    ${repeat(gg, item => item.title, this.renderItem.bind(this))}
                </ul>
            </mdc-grid-cell>
        `;
    }

    renderItem(item: any, index: number) {
        const className = index + 2 === this.step ? "active" : "";
        requestAnimationFrame(() => this.activeStep?.scrollIntoView())
        return html`
            <li class="${className}">
                <span class="title">${item.title}</span>
                <span class="secondary">${item.secondary}</span>
            </li>
        `;
    };
}

export const render = html`
    <cwc-learn-page-code-tick header="Tick" steps="${gg.length + 1}">
        <img slot="header" src="${image}"/>
    </cwc-learn-page-code-tick>
`;

export default render;