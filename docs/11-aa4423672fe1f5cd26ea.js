(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{34:function(t,s,e){"use strict";e.r(s),e.d(s,"Component",(function(){return o}));class o{constructor(){this._cycle=0,this._state="foo"}get state(){return this._state}set state(t){t!==this._state&&setTimeout(()=>{this._state=t,this.render()},0)}render(){const t=++this._cycle;this.log(t),this.state="bar",this.log(t),setTimeout(()=>this.log(t),0)}log(t){console.log(this.state,"Itteration "+t)}}}}]);