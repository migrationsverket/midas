import{$ as c,a as m,r as l,j as d}from"./iframe-BBhwDnFO.js";import{C as n}from"./Calendar-CPgeOZNO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DsHUdKR_.js";import"./Button-CckDCqMW.js";import"./utils-Bd87UzLz.js";import"./clsx-B-dksMZM.js";import"./Hidden-QElrSbG6.js";import"./useFocusRing-B_sqHjIH.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./RSPContexts-DMx7X0Ic.js";import"./Text-CuEErEoe.js";import"./useDateFormatter-4Xv2hkyM.js";import"./useControlledState-Kegn83S3.js";import"./useLocalizedStringFormatter-BEHHwBjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BAzTcMHH.js";import"./useEvent-Cdz6o0we.js";import"./getScrollParent-CyUBos4k.js";import"./scrollIntoView-JBdO06P0.js";import"./useDescription-eBvBmjGe.js";import"./VisuallyHidden-CeBruMUu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DztzWAWG.js";import"./createLucideIcon-DfX1ZOng.js";import"./chevron-right-DWCiSOn8.js";import"./Button-xHV73jzN.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./Heading-CvaAxUO0.js";import"./FieldError-CYJ3UXof.js";import"./Text-DjN1krRx.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
