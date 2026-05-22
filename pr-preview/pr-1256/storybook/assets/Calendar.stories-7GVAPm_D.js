import{$ as c,a as m,r as l,j as d}from"./iframe-BjXy11IP.js";import{C as n}from"./Calendar-Bhm4_SY0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnWHO_MH.js";import"./Button-CwQmoSQG.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_bNI1dK.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./RSPContexts-Dc6ISs8u.js";import"./Text-DM8Ihy_8.js";import"./useDateFormatter-58_fwrcg.js";import"./useControlledState-BFdO-Aas.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BW6Qqz_F.js";import"./useEvent-BvN2BQGn.js";import"./getScrollParent-Cwho8gKu.js";import"./scrollIntoView-e8j4Q6hS.js";import"./useDescription-BaUF5NM6.js";import"./VisuallyHidden-B8YjGTUD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DdeU8H9O.js";import"./createLucideIcon-BrUYswYS.js";import"./chevron-right-BLXHkGe7.js";import"./Button-CaR7So5F.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Heading-BDcENu1i.js";import"./FieldError-Bj299096.js";import"./Text-CXAF5biH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
