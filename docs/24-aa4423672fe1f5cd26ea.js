(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{47:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return d}));var c=n(2),o=n(14),r=n(0),i=function(e,t,n,c){var o,r=arguments.length,i=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,c);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},s=function(e,t,n,c){return new(n||(n=Promise))((function(o,r){function i(e){try{l(c.next(e))}catch(e){r(e)}}function s(e){try{l(c.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((c=c.apply(e,t||[])).next())}))};const l=[[[18,18]],[[9,12]]];let a=class extends o.a{renderMain(){const e=l[this.step-1];this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());return c.f`
            <mdc-grid-cell span="12">
                <cwc-code-highlight theme="light" src="./examples/tick.ts" .highlight="${e}"></cwc-code-highlight>
                <p>A common mistake is trying to access the state before nextTick</p>
                <cwc-code-runner .execute="${()=>s(this,void 0,void 0,(function*(){const{Component:e}=yield n.e(11).then(n.bind(null,34));return(new e).render(),yield new Promise(e=>setTimeout(e,100)),"👍🏻 Render complete"}))}"></cwc-code-runner>
            </mdc-grid-cell>
        `}};i([Object(r.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=i([Object(r.c)("cwc-learn-page-code-tick-example")],a);const d=c.f`<cwc-learn-page-code-tick-example steps="${l.length+1}">
    <div slot="header">
        <h1>TICK - example</h1>
    </div>
</cwc-learn-page-code-tick-example>`;t.default=d}}]);