import { customElement, LitElement, property, html } from "lit-element";

import './grid-inner';

import style from './grid.scss';

@customElement('mdc-grid')
export class MdcGrid extends LitElement {

    static styles = [style];

    @property({ reflect: true })
    public align?: 'left' | 'right';

    render() {
        return html`<div class="grid"><mdc-grid-inner><slot></slot></mdc-grid-inner></div>`;
    }
}

export * from './grid-inner';
export * from './grid-cell';