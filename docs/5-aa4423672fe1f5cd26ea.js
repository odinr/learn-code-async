(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{18:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return c}));const o=(e,n)=>Math.floor(Math.random()*n-e)+e,r=()=>o(100,500),c=(e,n=100)=>new Promise((t,r)=>setTimeout(()=>{o(0,100)<n?t():r()},e))},40:function(e,n,t){"use strict";t.r(n);var o=t(18);const r=(e,n=100)=>new Promise((t,r)=>setTimeout(()=>{Object(o.a)(0,100)<n?t():r()},e)),c=e=>r(Object(o.c)(),80).then(()=>(console.log("Fetched: "+e),e)).catch(()=>{throw console.error("Out of stock: "+e),Error("urk")}),s=(e,n)=>r(Object(o.c)()).then(()=>{const t=[...e.ingredients,n];return console.log("Applied: "+n),Object.assign(Object.assign({},e),{ingredients:t})});n.default=()=>{const e={name:"🍔 Hamburger",ingredients:new Array};return new Promise((n,t)=>{c("🍞Bun").then(t=>s(e,t).then(e=>c("🥩Patty").then(t=>s(e,t).then(e=>c("🧀Chesse").then(t=>s(e,t).then(e=>c("🥓Bacon").then(t=>s(e,t).then(e=>c("🍞Bun").then(t=>s(e,t).then(n)))))))))).catch(()=>t("💩 Made a turd"))})}}}]);