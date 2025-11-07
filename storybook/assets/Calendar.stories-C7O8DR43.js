import{$ as p,a as m,r as l,j as d}from"./iframe-U3ALJe9s.js";import{C as n}from"./Calendar-JGR9bwwO.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-nTtHDcyg.js";import"./Button-BdzKwSP5.js";import"./utils-CJw4qjg1.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dvxfn_Wb.js";import"./useFocusRing-CwWXZ52H.js";import"./index-C3ZjivRj.js";import"./index-BQQMRsqV.js";import"./useLabels-D5IcVc4d.js";import"./useButton-Bjaukeml.js";import"./RSPContexts-BQ0CAOJK.js";import"./Text-czu22r0O.js";import"./useDateFormatter-oSsDj-vV.js";import"./useControlledState-DVxKfx7J.js";import"./useLocalizedStringFormatter-DL2T9cnF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BvUxXb_m.js";import"./useEvent-B7BlpQxC.js";import"./getScrollParent-B6EaGYIm.js";import"./scrollIntoView-BbQiybL1.js";import"./useDescription-6RqeIJNO.js";import"./VisuallyHidden-Cfn9-R-k.js";import"./clsx-Ciqy0D92.js";import"./Button-Dn6-0_jW.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DxUNEvxx.js";import"./chevron-right-CGeFL0n2.js";import"./Heading-DI3X8hn9.js";import"./FieldError-Ch2SQ0dS.js";import"./Text-CtDdYdYe.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
