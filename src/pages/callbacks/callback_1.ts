import { PageElement } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-callback-1')
class CodePageCallback1 extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    getHighlight(): Array<[number, number]> {
        switch (this.step) {
            case 1: return Array([1,5])
            case 2: return Array([8,11])
            case 3: return Array([15,18])
        }
    }

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
                <cwc-code-highlight src="./examples/callback_1.ts" .highlight="${this.getHighlight()}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/callback_1');
        const result = code.default();
        const content = result.ingredients.map(i => html`<span>${i} </span>`);
        await new Promise(r => setTimeout(r, 1000));
        return html`<h2>${result.name}</h2>${content}`;
    }
}

export const render = html`<cwc-learn-page-code-callback-1 header="A good attempt..." steps="4"></cwc-learn-page-code-callback-1>`;

export default render;