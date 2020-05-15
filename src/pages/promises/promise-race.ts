import { PageElement } from '../../components';
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

export const render = html`
    <cwc-learn-page-code-promise-race header="Promise.race()" steps="2">
        <div slot="lead">
            <p>
                The <code>Promise.race()</code> method returns a promise that <em>fulfills or rejects</em> 
                as soon as <em>one</em> of the promises in an iterable <em>fulfills or rejects</em>, 
                with the value or reason from that promise.
            </p>
        </div>
    </cwc-learn-page-code-promise-race>`;

export default render;