import{$ as c,a as m,r as l,j as d}from"./iframe-DyVZO6Jd.js";import{C as n}from"./Calendar-BcpCWB-A.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-gbtqZ8R5.js";import"./Button-B6InbNDy.js";import"./utils-B4PADexm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DIN7ehBk.js";import"./useFocusRing-D32E8y-A.js";import"./index-CPCUhuiH.js";import"./index-Co6SSMDt.js";import"./useLabel-BjmSwcyg.js";import"./useLabels-C-NvnRdm.js";import"./useButton-B-EgkQxS.js";import"./RSPContexts-X7l1b1Jy.js";import"./Text-CipKPPoF.js";import"./useDateFormatter-BUr6CN5L.js";import"./useControlledState-DG-0bHR_.js";import"./useLocalizedStringFormatter-BIY6CwSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-LorJGv10.js";import"./useEvent-BZfyFw7i.js";import"./getScrollParent-CATvZmdv.js";import"./scrollIntoView-FtsWToTZ.js";import"./useDescription-BgvtJJFO.js";import"./VisuallyHidden-CBSXawwP.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DLsZ2wCr.js";import"./createLucideIcon-CjUPJyft.js";import"./chevron-right-FwH9m5W_.js";import"./Button-DFXCpOJf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dt4-iLHW.js";import"./Heading-AKd3Rpar.js";import"./FieldError-BOgY85Mx.js";import"./Text-BNccgVJc.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
