(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{48:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return h}));var c=t(2),r=t(14),o=t(0),i=function(e,n,t,c){var r,o=arguments.length,i=o<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,c);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(o<3?r(i):o>3?r(n,t,i):r(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=function(e,n,t,c){return new(t||(t=Promise))((function(r,o){function i(e){try{s(c.next(e))}catch(e){o(e)}}function a(e){try{s(c.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}s((c=c.apply(e,n||[])).next())}))};const s=[[[1,4]],[[6,9]],[[12,15]],[[16,20]]];let d=class extends r.a{renderMain(){const e=s[this.step-1];this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());return c.f`
            <mdc-grid-cell span="12">
            <cwc-code-highlight theme="light" src="./examples/basic.ts" .highlight="${e}"></cwc-code-highlight>
            <cwc-code-runner .execute="${()=>a(this,void 0,void 0,(function*(){const e=(yield t.e(7).then(t.bind(null,35))).default(),n=e.ingredients.map(e=>c.f`<span>${e} </span>`);return c.f`<h2>${e.name}</h2>${n}`}))}"></cwc-code-runner>
            </mdc-grid-cell>
        `}};i([Object(o.h)("cwc-code-runner")],d.prototype,"CodeRunner",void 0),d=i([Object(o.c)("cwc-learn-page-code-basic")],d);const h=c.f`<cwc-learn-page-code-basic steps="${s.length+1}">
    <div slot="header">
        <h1>Topic of today</h1>
        <h2>🍔 Making a hamburger 🍔</h2>
    </div>
</cwc-learn-page-code-basic>`;n.default=h}}]);