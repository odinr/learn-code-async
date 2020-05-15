import { html } from 'lit-html';
import { PageElement } from '../../../components';
import { customElement, query } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

const highlights = [
    [[18,18]],
    [[9,12]],
]

@customElement('cwc-learn-page-code-tick-example')
class CodePageTickExample extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    renderMain() {
        const highlight = highlights[this.step - 1] as Array<[number, number]>;
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run())
        }
        const runCode = async () => {
            const { Component } = await import('../../../examples/tick');
            (new Component).render();
            await new Promise(r => setTimeout(r, 100));
            return "👍🏻 Render complete";
        }
        return html`
            <mdc-grid-cell span="12">
                <cwc-code-highlight theme="light" src="./examples/tick.ts" .highlight="${highlight}"></cwc-code-highlight>
                <p>A common mistake is trying to access the state before nextTick</p>
                <cwc-code-runner .execute="${runCode}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }
}

export const render = html`<cwc-learn-page-code-tick-example steps="${highlights.length + 1}">
    <div slot="header">
        <h1>TICK - example</h1>
    </div>
</cwc-learn-page-code-tick-example>`;

export default render;