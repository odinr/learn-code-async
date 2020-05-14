(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{50:function(e,c,t){"use strict";t.r(c),t.d(c,"render",(function(){return o}));var n=t(15),r=t(0),a=function(e,c,t,n){var r,a=arguments.length,l=a<3?c:null===n?n=Object.getOwnPropertyDescriptor(c,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,c,t,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(l=(a<3?r(l):a>3?r(c,t,l):r(c,t))||l);return a>3&&l&&Object.defineProperty(c,t,l),l};let l=class extends n.a{getHighlight(){switch(this.step){case 1:return[1,5];case 2:return[8,11];case 3:return[15,18]}return[]}renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.Code.CodeRunner.run()),r.e`
            <mdc-grid-cell span="12">
            <cwc-learn-code-container 
                runtime="1000"
                src="./examples/callback_1.ts" 
                .code=${t.e(8).then(t.bind(null,37))}
                .highlight=${this.getHighlight()}
            >
            </cwc-learn-code-container>
            </mdc-grid-cell>
        `}};a([Object(r.h)("cwc-learn-code-container")],l.prototype,"Code",void 0),l=a([Object(r.c)("cwc-learn-page-code-callback-1")],l);const o=r.e`<cwc-learn-page-code-callback-1 header="TICK" steps="4"></cwc-learn-page-code-callback-1>`;c.default=o}}]);