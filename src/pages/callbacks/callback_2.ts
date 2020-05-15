import { PageElement } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-callback-2')
class CodePageCallback2 extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    getHighlight(): Array<[number, number]> {
        switch (this.step) {
            case 1: return Array([1,1],[6,6], [13,13])
            case 2: return Array([22, 43])
        }
    }

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
                <cwc-code-highlight src="./examples/dish-callback-2.ts" .highlight="${this.getHighlight()}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/dish-callback-2');
        const result = await new Promise<Dish>(resolve => code.default(resolve));
        const content = result.ingredients.map(i => html`<span>${i} </span>`);
        return html`<h2>${result.name}</h2>${content}`;
    }
}

export const render = html`<cwc-learn-page-code-callback-2 header="Callback" steps="3"></cwc-learn-page-code-callback-2>`;

export default render;