import { PageElement, CodeContainer } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-promise-dish')
class CodePagePromiseDish extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    getHighlight(): Array<[number, number]> {
        switch (this.step) {
            case 1: return Array([3,3], [5,9])
            case 2: return Array([11,19], [21, 27])
            case 3: return Array([35,55])
        }
    }

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="/examples/dish-promise.ts" .highlight="${this.getHighlight()}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/dish-promise');
        try{
            const result = await code.default();
            const content = result.ingredients.map(i => html`<span>${i} </span>`);
            return html`<h2>${result.name}</h2>${content}`;
        } catch(error){
            return error;
        }
    }
}

export const render = html`<cwc-learn-page-code-promise-dish header="Promise dish" steps="4"></cwc-learn-page-code-promise-dish>`;

export default render;