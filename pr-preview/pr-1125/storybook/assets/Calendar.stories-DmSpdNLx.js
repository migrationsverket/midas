import{$ as c,a as m,r as l,j as d}from"./iframe-DynRW4HM.js";import{C as n}from"./Calendar-DsYL2eP4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-TZCrpVEz.js";import"./Button-CFOPGSLm.js";import"./utils-wI83z-IC.js";import"./clsx-B-dksMZM.js";import"./Hidden-ilD6RPA6.js";import"./useFocusRing-Ccc6VB4N.js";import"./index-Dlo0bpld.js";import"./index-B5QOT-C7.js";import"./useLabels-DQKocp6Q.js";import"./useButton-CnY6hm7P.js";import"./RSPContexts-Cw8qzvbL.js";import"./Text-DyP2OCNX.js";import"./useDateFormatter-CkjZjIUy.js";import"./useControlledState-CKdYrkOm.js";import"./useLocalizedStringFormatter-pKVfkyKC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CsNgwcoF.js";import"./useEvent-D88FFhaJ.js";import"./getScrollParent-Ck8UnBVY.js";import"./scrollIntoView-BeaiGgFN.js";import"./useDescription-DGfjZI1Z.js";import"./VisuallyHidden-HbDYDEMR.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CwNQSiHd.js";import"./createLucideIcon-DGkkD8Qb.js";import"./chevron-right-Bg2chRsR.js";import"./Button-BvN-UdiG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D3oqCIEX.js";import"./Heading-DAs09SW9.js";import"./FieldError-CNSWJfvH.js";import"./Text-CeGvnbH5.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
