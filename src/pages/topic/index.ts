import { html } from "lit-element";

export const render = html`
<cwc-learn-page>
    <cwc-learn-page-header><h1>Topic</h1></cwc-learn-page-header>
    <mwc-list>
        <mwc-list-item>
            <cwc-learn-link href="/callback">Callback</cwc-learn-link>
        </mwc-list-item>
        <mwc-list-item>
            <cwc-learn-link href="/promises">Promises</cwc-learn-link>
        </mwc-list-item>
        <mwc-list-item>
            <cwc-learn-link href="/async_await">Async/Await</cwc-learn-link>
        </mwc-list-item>
        <mwc-list-item>
            <cwc-learn-link href="/generators">Generators</cwc-learn-link>
        </mwc-list-item>
        <mwc-list-item>
            <cwc-learn-link href="/generators">Async Generators</cwc-learn-link>
        </mwc-list-item>
    </mwc-list>
</cwc-learn-page>
`;

export default render;