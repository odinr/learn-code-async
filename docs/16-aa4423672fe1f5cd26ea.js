(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{50:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return l}));var c=t(14),r=t(0),i=function(e,n,t,c){var r,i=arguments.length,o=i<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,c);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(n,t,o):r(n,t))||o);return i>3&&o&&Object.defineProperty(n,t,o),o},o=function(e,n,t,c){return new(t||(t=Promise))((function(r,i){function o(e){try{l(c.next(e))}catch(e){i(e)}}function a(e){try{l(c.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}l((c=c.apply(e,n||[])).next())}))};let a=class extends c.a{getHighlight(){switch(this.step){case 1:return Array([1,1],[6,6],[13,13]);case 2:return Array([22,43])}}renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run()),r.e`
            <mdc-grid-cell span="12">
                <cwc-code-highlight src="./examples/dish-callback-2.ts" .highlight="${this.getHighlight()}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return o(this,void 0,void 0,(function*(){const e=yield t.e(4).then(t.bind(null,37)),n=yield new Promise(n=>e.default(n)),c=n.ingredients.map(e=>r.e`<span>${e} </span>`);return r.e`<h2>${n.name}</h2>${c}`}))}};i([Object(r.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=i([Object(r.c)("cwc-learn-page-code-callback-2")],a);const l=r.e`<cwc-learn-page-code-callback-2 header="Callback" steps="3"></cwc-learn-page-code-callback-2>`;n.default=l}}]);