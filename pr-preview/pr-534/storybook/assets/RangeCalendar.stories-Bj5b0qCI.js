import{R as N}from"./RangeCalendar-C-z-St8U.js";import{u as p,e as k}from"./index-DtSMq7G1.js";import{a as U,b as F}from"./useDateFormatter-COhcF6LI.js";import{g as G,c as M}from"./_commonjsHelpers-Cpj98o6Y.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./CalendarHeader-5fMVFmGd.js";import"./Button-K4F0BPlU.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BM4Mp5Au.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-D0cNLqf0.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useEvent-DnmuJhSu.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-TyCFs068.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Button-HioJKOLJ.js";import"./Button.module-kL9Mhzoi.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./Heading-DmTsGMz3.js";import"./Text-BO1MQlio.js";var S={exports:{}};(function(m,f){(function(n,i){i(f)})(M,function(n){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,c){r.__proto__=c}||function(r,c){for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(r[o]=c[o])},i(e,t)};function g(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");i(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var a=Date,b=null,s=function(e){g(t,e);function t(r,c,o,v,h,D,_){e.call(this);var d;switch(arguments.length){case 0:b!==null?d=new a(b.valueOf()):d=new a;break;case 1:d=new a(r);break;default:o=typeof o>"u"?1:o,v=v||0,h=h||0,D=D||0,_=_||0,d=new a(r,c,o,v,h,D,_);break}return d}return t}(a);s.prototype=a.prototype,s.UTC=a.UTC,s.now=function(){return new s().valueOf()},s.parse=function(e){return a.parse(e)},s.toString=function(){return a.toString()};function x(e){var t=new Date(e.valueOf());if(isNaN(t.getTime()))throw new TypeError("mockdate: The time set is an invalid date: "+e);Date=s,b=t.valueOf()}function R(){Date=a}var K={set:x,reset:R};n.default=K,n.reset=R,n.set=x,Object.defineProperty(n,"__esModule",{value:!0})})})(S,S.exports);var q=S.exports;const A=G(q),w=F("2025-05-29"),Tt={component:N,title:"Components/Calendar/RangeCalendar",tags:["autodocs"],async beforeEach(){return A.set(w.toDate(U())),()=>{A.reset()}}},l={},u={args:{isDisabled:!0}},y={tags:["!dev","!autodocs"],play:async({canvas:m,step:f})=>{await f("it should be possible to select today and two days ahead with the keyboard",async()=>{const n=w.day.toString(),i=w.add({days:1}).day.toString(),g=w.add({days:2}).day.toString();await p.tab(),await p.tab(),await p.tab(),await p.keyboard("[Space]"),await p.keyboard("[ArrowRight]"),await k(m.getByRole("gridcell",{name:n})).toHaveAttribute("aria-selected","true"),await k(m.getByRole("gridcell",{name:i})).toHaveAttribute("aria-selected","true"),await k(m.getByRole("gridcell",{name:g})).toHaveAttribute("aria-selected","true")})}};var E,O,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var C,j,B;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var H,$,P;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select today and two days ahead with the keyboard', async () => {
      const todaysDate = now.day.toString();
      const tomorrow = now.add({
        days: 1
      }).day.toString();
      const dayAfterTomorrow = now.add({
        days: 2
      }).day.toString();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowRight]');
      await expect(canvas.getByRole('gridcell', {
        name: todaysDate
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(P=($=y.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};const Ct=["Primary","Disabled","KeyboardTest"];export{u as Disabled,y as KeyboardTest,l as Primary,Ct as __namedExportsOrder,Tt as default};
