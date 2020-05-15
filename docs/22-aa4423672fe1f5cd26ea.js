(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{66:function(e,c,s){"use strict";s.r(c),s.d(c,"render",(function(){return i}));var t=s(0),a=s.p+"9c20f1a56b6e7a8fbde2b258403aef01.jpg";const i=t.e`
    <cwc-learn-page header="Lifecycle">
        <div slot="header">
            <h1>Lifecycle</h1>
            <img src="${a}" />
        </div>
        <div slot="lead">
            <p>
                When Node.js starts, it initializes the event loop, 
                processes the provided input script which may make async API calls, 
                schedule timers, or call <code>process.nextTick()</code>, then begins processing the event loop.
            </p>
            <p>Each phase has a <abbr title="First In First Out">FIFO</abbr> queue of callbacks to execute.</p>
        </div>
    </cwc-learn-page>
`;c.default=i}}]);