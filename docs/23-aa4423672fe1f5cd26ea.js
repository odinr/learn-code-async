(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{60:function(e,t,c){"use strict";c.r(t),c.d(t,"render",(function(){return p}));var l=c(0),a=c.p+"0ae11f6b46e25bab2577ed164bf5be99.jpg",r=c(14),o=c(13),i=l.b`ul{list-style:none;margin:0;padding:0}ul li{margin:10px 0;padding:20px;border-left:20px solid transparent;line-height:normal}ul li.active{border-left:1rem solid rgba(0,100,255,.5);background-color:rgba(0,100,255,.1)}ul li:not(.active){color:var(--color,rgba(0,0,0,.75))}ul li .title{font-weight:700;display:block;margin-bottom:.5rem}ul li code{background:rgba(0,0,0,.1);line-height:1;font-family:"Fira code"}`,n=function(e,t,c,l){var a,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,c):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,c,l);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(r<3?a(o):r>3?a(t,c,o):a(t,c))||o);return r>3&&o&&Object.defineProperty(t,c,o),o};const s=[{title:"Timers",secondary:l.e`this phase executes callbacks scheduled by <code>setTimeout()</code> and <code>setInterval()</code>`},{title:"Pending callbacks",secondary:l.e`executes I/O callbacks deferred to the next loop iteration`},{title:"Idle & Prepare",secondary:l.e`only used internally`},{title:"Poll",secondary:l.e`retrieve new I/O events<br/> execute I/O related callbacks <i>except of close callbacks, timers and setImmediate</i><br/> Node will block here when appropriate`},{title:"Check",secondary:l.e`<code>setImmediate()</code> callbacks are invoked here</code>`},{title:"Close callbacks",secondary:l.e`some close callbacks, e.g. <code>socket.on('close', ...)</code>`}];let d=class extends r.a{renderMain(){return l.e`
            <mdc-grid-cell>
                <ul>
                    ${Object(o.a)(s,e=>e.title,this.renderItem.bind(this))}
                </ul>
            </mdc-grid-cell>
        `}renderItem(e,t){const c=t+2===this.step?"active":"";return requestAnimationFrame(()=>{var e;return null===(e=this.activeStep)||void 0===e?void 0:e.scrollIntoView()}),l.e`
            <li class="${c}">
                <span class="title">${e.title}</span>
                <span class="secondary">${e.secondary}</span>
            </li>
        `}};d.styles=r.a.styles.concat(i),n([Object(l.h)("li.active")],d.prototype,"activeStep",void 0),d=n([Object(l.c)("cwc-learn-page-code-tick")],d);const p=l.e`
    <cwc-learn-page-code-tick header="Tick" steps="${s.length+1}">
        <img slot="header" src="${a}"/>
    </cwc-learn-page-code-tick>
`;t.default=p}}]);