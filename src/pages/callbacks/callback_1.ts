import { PageElement, CodeContainer } from '../../components';
import { customElement, query, html } from 'lit-element';

@customElement('cwc-learn-page-code-callback-1')
class CodePageCallback1 extends PageElement {

    @query('cwc-learn-code-container')
    Code: CodeContainer;

    getHighlight() {
        switch (this.step) {
            case 1: return [1, 5]
            case 2: return [8, 11]
            case 3: return [15, 18]
        }
        return [];
    }

    renderMain() {
        if (this.step === this.steps) {
            requestAnimationFrame(() => this.Code.CodeRunner.run());
        }
        return html`
            <mdc-grid-cell span="12">
            <cwc-learn-code-container 
                runtime="1000"
                src="/examples/callback_1.ts" 
                .code=${import('../../examples/callback_1')}
                .highlight=${this.getHighlight()}
            >
            </cwc-learn-code-container>
            </mdc-grid-cell>
        `;
    }
}

export const render = html`<cwc-learn-page-code-callback-1 header="TICK" steps="4"></cwc-learn-page-code-callback-1>`;

export default render;