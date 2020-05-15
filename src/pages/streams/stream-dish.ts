import { PageElement } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-stream')
class CodePageStreamDish extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/stream.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/stream');
        try{
            const result = await (await code.default()).toPromise();
            const content = result.ingredients.map(i => html`<span>${i} </span>`);
            return html`<h2>${result.name}</h2>${content}`;
        } catch(error){
            return error;
        }
    }
}

export const render = html`<cwc-learn-page-code-stream header="Streams" steps="2"></cwc-learn-page-code-stream>`;

export default render;