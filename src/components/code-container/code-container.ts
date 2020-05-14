import { customElement, property, eventOptions, html, LitElement, query } from "lit-element";

import "@codin/cwc-code-highlight";
import "../code-runner/code-runner";

import style from './code-container.scss';
import CodeRunner from "../code-runner/code-runner";

@customElement('cwc-learn-code-container')
export class CodeContainer extends LitElement {

    static styles = [style];

    @property({ type: Function, attribute: false })
    code: Promise<{ default: () => Dish }>;

    @property()
    src: string;

    @property({type: Array})
    highlight?: number[];

    @query('cwc-code-runner')
    CodeRunner: CodeRunner;

    @property({ type: Number })
    runtime: number = 0;


    render() {
        const highlight = Array((this.highlight || []) as [number, number]);
        return html`
            <cwc-code-highlight theme="light" src="${this.src}" .highlight="${highlight}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}" runtime="${this.runtime}"></cwc-code-runner>
        `;
    };

    @eventOptions({ passive: true })
    protected async runCode() {
        const code = await this.code;
        try {
            const result = code.default();
            const content = result.ingredients.map(i => html`<span>${i} </span>`);
            return html`<h2>${result.name}</h2>${content}`;
        } catch (err) {
            return err;
        }
    }
}