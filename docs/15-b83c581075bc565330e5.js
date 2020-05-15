(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{50:function(e,t,c){"use strict";c.r(t),c.d(t,"render",(function(){return l}));var n=c(15),r=c(0),a=function(e,t,c,n){var r,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,c):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,c,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(a<3?r(o):a>3?r(t,c,o):r(t,c))||o);return a>3&&o&&Object.defineProperty(t,c,o),o};let o=class extends n.a{getHighlight(){switch(this.step){case 1:return[1,5];case 2:return[8,11];case 3:return[15,18]}return[]}renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.Code.CodeRunner.run()),r.e`
            <mdc-grid-cell span="12">
            <cwc-learn-code-container 
                runtime="1000"
                src="./examples/callback_1.ts" 
                .code=${c.e(8).then(c.bind(null,37))}
                .highlight=${this.getHighlight()}
            >
            </cwc-learn-code-container>
            </mdc-grid-cell>
        `}};a([Object(r.h)("cwc-learn-code-container")],o.prototype,"Code",void 0),o=a([Object(r.c)("cwc-learn-page-code-callback-1")],o);const l=r.e`<cwc-learn-page-code-callback-1 header="A good attempt..." steps="4"></cwc-learn-page-code-callback-1>`;t.default=l}}]);