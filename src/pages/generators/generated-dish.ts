import { PageElement } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

const highlights = [
    [[23, 29]],
    [[40, 42]],
];

@customElement('cwc-learn-page-code-async-dish-refactor')
class CodePageAsyncDish extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        const highlight = highlights[this.step - 1] as Array<[number, number]>;
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/dish-async-refactor.ts" .highlight="${highlight}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/dish-async-refactor');
        try {
            const result = await code.default();
            const content = result.ingredients.map(i => html`<span>${i} </span>`);
            return html`<h2>${result.name}</h2>${content}`;
        } catch (error) {
            return error;
        }
    }
}

export const render = html`<cwc-learn-page-code-async-dish-refactor header="Async / Await generator" steps="${highlights.length + 1}"></cwc-learn-page-code-async-dish-refactor>`;

export default render;