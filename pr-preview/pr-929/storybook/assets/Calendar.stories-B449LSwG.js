import{$ as p,a as m,r as l,j as d}from"./iframe-DfKVIDFT.js";import{C as n}from"./Calendar-CXFyA0Gx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-HlRQBWol.js";import"./Button-B4NKyMIN.js";import"./utils-BsJ338XX.js";import"./clsx-B-dksMZM.js";import"./Hidden-DXHl2rmN.js";import"./useFocusRing-DqSVY-T2.js";import"./index-DmKxMGqW.js";import"./index-i8eomWHR.js";import"./useLabels-DK3feGvu.js";import"./useButton-C03Un9El.js";import"./RSPContexts-3olCKSwS.js";import"./Text-T0mofHnw.js";import"./useDateFormatter-Dx7SiVc7.js";import"./useControlledState-D9mSLKmW.js";import"./useLocalizedStringFormatter-CRP9x8Uw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-t-V8-U89.js";import"./useEvent-5uq1jlnw.js";import"./getScrollParent-CTx9KSmX.js";import"./scrollIntoView-ekMIuG6i.js";import"./useDescription-832-Jrdv.js";import"./VisuallyHidden-LQfzhTeZ.js";import"./clsx-Ciqy0D92.js";import"./Button-BbeKBUCA.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B4afkyr6.js";import"./chevron-right-BHMYau2Z.js";import"./Heading-B9V870LV.js";import"./FieldError-Dd8N4USr.js";import"./Text-Ds5rOpWL.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
