(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{49:function(e,t,c){"use strict";c.r(t),c.d(t,"render",(function(){return i}));var n=c(2),r=c(15),o=c(0),s=function(e,t,c,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,c):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,c,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,c,s):r(t,c))||s);return o>3&&s&&Object.defineProperty(t,c,s),s};let a=class extends r.a{getHighlight(){switch(this.step){case 1:return[1,4];case 2:return[6,9];case 3:return[12,15];case 4:return[16,20]}return[]}renderMain(){return this.step===this.steps&&requestAnimationFrame(()=>this.Code.CodeRunner.run()),n.f`
            <mdc-grid-cell span="12">
            <cwc-learn-code-container 
                src="./examples/basic.ts" 
                .code=${c.e(7).then(c.bind(null,36))}
                .highlight=${this.getHighlight()}
            >
            </cwc-learn-code-container>
            </mdc-grid-cell>
        `}};s([Object(o.h)("cwc-learn-code-container")],a.prototype,"Code",void 0),a=s([Object(o.c)("cwc-learn-page-code-basic")],a);const i=n.f`<cwc-learn-page-code-basic header="Synchronous" steps="5"></cwc-learn-page-code-basic>`;t.default=i}}]);