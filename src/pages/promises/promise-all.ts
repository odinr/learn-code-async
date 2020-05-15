import { PageElement } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-promise-all')
class CodePagePromiseAll extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;


    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/promise-all.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/promise-all');
        return await code.default();
    }
}

export const render = html`
<cwc-learn-page-code-promise-all header="Promise.all()" steps="2">
    <div slot="lead">
        <p>
            The <code>Promise.all()</code> method returns a single Promise that resolves when all of the 
            promises passed as an iterable have resolved or when the iterable contains no promises. 
            It rejects with the reason of the first promise that rejects.
        </p>
    </div>
</cwc-learn-page-code-promise-all>`;

export default render;