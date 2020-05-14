import { PageElement, CodeContainer } from '../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../components/code-runner/code-runner';

@customElement('cwc-learn-page-code-promise-race')
class CodePagePromiseRace extends PageElement {

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;


    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.CodeRunner.run());
        }
        // const highlight = Array((this.getHighlight() || []) as [number, number]);
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/promise-race.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
        const code = await import('../../examples/promise-race');
        const result = await code.default();
        return result;
    }
}

export const render = html`<cwc-learn-page-code-promise-race header="Promise.race()" steps="2"></cwc-learn-page-code-promise-race>`;

export default render;