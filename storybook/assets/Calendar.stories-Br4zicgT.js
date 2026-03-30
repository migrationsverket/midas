import{$ as c,a as m,r as l,j as d}from"./iframe-2y2Syr64.js";import{C as n}from"./Calendar-B1BYUCkn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DxDt7Cnp.js";import"./Button-9fFVOiJo.js";import"./utils-QeTQioJq.js";import"./clsx-B-dksMZM.js";import"./Hidden-B__XOjR0.js";import"./useFocusRing-g5rhpMio.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./RSPContexts-B0u5lwvT.js";import"./Text-CjKUI5Vp.js";import"./useDateFormatter-Ue6Ck-eU.js";import"./useControlledState-CNntbmuw.js";import"./useLocalizedStringFormatter-ChuRjCa_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cg6iEtUl.js";import"./useEvent-BoNgmAiC.js";import"./getScrollParent-DZSok8Rc.js";import"./scrollIntoView-lPomJvMQ.js";import"./useDescription-DxQUmr3s.js";import"./VisuallyHidden-CwQymDfp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-wAUjPzQF.js";import"./createLucideIcon-CukoxtoU.js";import"./chevron-right-DQRLdGdx.js";import"./Button-D69d27MT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./Heading-CWLS9XtN.js";import"./FieldError-C0y0OPWO.js";import"./Text-BstWv5qu.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
