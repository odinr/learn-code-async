(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{57:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return s}));var c=t(15),r=t(0),o=function(e,n,t,c){var r,o=arguments.length,i=o<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,c);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(o<3?r(i):o>3?r(n,t,i):r(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},i=function(e,n,t,c){return new(t||(t=Promise))((function(r,o){function i(e){try{s(c.next(e))}catch(e){o(e)}}function a(e){try{s(c.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}s((c=c.apply(e,n||[])).next())}))};let a=class extends c.a{renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run()),r.e`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/stream.ts"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return i(this,void 0,void 0,(function*(){const e=yield Promise.all([t.e(1),t.e(6)]).then(t.bind(null,44));try{const n=yield(yield e.default()).toPromise(),t=n.ingredients.map(e=>r.e`<span>${e} </span>`);return r.e`<h2>${n.name}</h2>${t}`}catch(e){return e}}))}};o([Object(r.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=o([Object(r.c)("cwc-learn-page-code-stream")],a);const s=r.e`<cwc-learn-page-code-stream header="Streams" steps="2"></cwc-learn-page-code-stream>`;n.default=s}}]);