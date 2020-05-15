(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{53:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return a}));var n=r(15),c=r(0),o=function(e,t,r,n){var c,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(i=(o<3?c(i):o>3?c(t,r,i):c(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},i=function(e,t,r,n){return new(r||(r=Promise))((function(c,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function s(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}a((n=n.apply(e,t||[])).next())}))};let s=class extends n.a{renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run()),c.e`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/promise-race.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return i(this,void 0,void 0,(function*(){const e=yield r.e(10).then(r.bind(null,40));return yield e.default()}))}};o([Object(c.h)("cwc-code-runner")],s.prototype,"CodeRunner",void 0),s=o([Object(c.c)("cwc-learn-page-code-promise-race")],s);const a=c.e`
    <cwc-learn-page-code-promise-race header="Promise.race()" steps="2">
        <div slot="lead">
            <p>
                The <code>Promise.race()</code> method returns a promise that <em>fulfills or rejects</em> 
                as soon as <em>one</em> of the promises in an iterable <em>fulfills or rejects</em>, 
                with the value or reason from that promise.
            </p>
        </div>
    </cwc-learn-page-code-promise-race>`;t.default=a}}]);