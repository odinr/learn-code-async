(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{51:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return l}));var r=n(14),o=n(0),c=function(e,t,n,r){var o,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(c<3?o(i):c>3?o(t,n,i):o(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},i=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{l(r.next(e))}catch(e){c(e)}}function s(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))};let s=class extends r.a{renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run()),o.e`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/promise-all.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return i(this,void 0,void 0,(function*(){const e=yield n.e(9).then(n.bind(null,38));return yield e.default()}))}};c([Object(o.h)("cwc-code-runner")],s.prototype,"CodeRunner",void 0),s=c([Object(o.c)("cwc-learn-page-code-promise-all")],s);const l=o.e`
<cwc-learn-page-code-promise-all header="Promise.all()" steps="2">
    <div slot="lead">
        <p>
            The <code>Promise.all()</code> method returns a single Promise that resolves when all of the 
            promises passed as an iterable have resolved or when the iterable contains no promises. 
            It rejects with the reason of the first promise that rejects.
        </p>
    </div>
</cwc-learn-page-code-promise-all>`;t.default=l}}]);