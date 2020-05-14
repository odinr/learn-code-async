import { customElement, LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import style from './app.scss';


import './components';

import intro from './pages/intro';
import callbacks from './pages/callbacks';
import promises from './pages/promises';
import async from './pages/async-await';

import image404 from './404.png';

const routes: Route[] = [
    {
        pattern: /\/(home)?$/,
        path: '/home',
        render: async () => (await import('./pages/home')).render
    },
    ...intro,
    ...callbacks,
    ...promises,
    ...async,
    {
        pattern: /.*/,
        path: "/404",
        render: async () => {
            const onClick = (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                history.pushState({}, "", (e.target as HTMLLinkElement).href);
                dispatchEvent(new PopStateEvent('popstate', {}));
            };
            const index = routes.slice(0, routes.length - 1);
            return html`
                <cwc-learn-page> 
                    <div slot="header">
                        <h1>404</h1>
                        <img src="${image404}"/>
                    </div>
                    ${repeat(index, r => r.path, r => html`<br/><a @click=${onClick} href="${r.path}">${r.path}</a>`)}
                </cwc-learn-page>
            `;
        }
    }
]

@customElement('cwc-learn-app')
export class LearnCodinApp extends LitElement {
    static styles = [style];

    render() {
        return html`<cwc-learn-router .routes="${routes}"></cwc-learn-router>`;
        // return content;// html`${content}`;
    }
}


