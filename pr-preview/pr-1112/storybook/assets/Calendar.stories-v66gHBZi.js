import{$ as c,a as m,r as l,j as d}from"./iframe-BWIE8y1J.js";import{C as n}from"./Calendar-BrptHIje.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bd8nOwTT.js";import"./Button-BmJwA7TX.js";import"./utils-CFen-6Tt.js";import"./clsx-B-dksMZM.js";import"./Hidden-CsKeLRVA.js";import"./useFocusRing-CeRcfsBW.js";import"./index-BQbDDAyZ.js";import"./index-CBFugdgC.js";import"./useLabels-CSgzIvv9.js";import"./useButton-lbVBAiGE.js";import"./RSPContexts-D6p6nrlG.js";import"./Text-CGdD-JKO.js";import"./useDateFormatter-DwRkVpdh.js";import"./useControlledState-lz_f80Ux.js";import"./useLocalizedStringFormatter-BmqPCVAe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEhd0Uc5.js";import"./useEvent-0NTm2RcH.js";import"./getScrollParent-Djcm2OaX.js";import"./scrollIntoView-CeNGtx-R.js";import"./useDescription-tI3vnHYy.js";import"./VisuallyHidden-nM3_t9w5.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-bKyNo2XO.js";import"./createLucideIcon-BmTkHA-q.js";import"./chevron-right-CyUUSm1B.js";import"./Button-Bhvh_nWe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bj-PcblM.js";import"./Heading-Bvqm9Oaw.js";import"./FieldError-DQP9cPYO.js";import"./Text-LCrvkG-q.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
