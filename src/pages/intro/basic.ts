import { html } from 'lit-html';
import { PageElement, CodeContainer } from '../../components';
import { property, customElement, query } from 'lit-element';

@customElement('cwc-learn-page-code-basic')
class CodePageBasic extends PageElement {

    @query('cwc-learn-code-container')
    Code: CodeContainer;

    getHighlight(){
        switch(this.step){
            case 1: return [1,4]
            case 2: return [6,9]
            case 3: return [12,15]
            case 4: return [16,20]
        }
        return [];
    }

    renderMain() {
        if(this.step === this.steps){
            requestAnimationFrame(() => this.Code.CodeRunner.run())
        }
        return html`
            <mdc-grid-cell span="12">
            <cwc-learn-code-container 
                src="./examples/basic.ts" 
                .code=${import('../../examples/basic')}
                .highlight=${this.getHighlight()}
            >
            </cwc-learn-code-container>
            </mdc-grid-cell>
        `;
    }
}

export const render = html`<cwc-learn-page-code-basic header="Synchronous" steps="5"></cwc-learn-page-code-basic>`;

export default render;