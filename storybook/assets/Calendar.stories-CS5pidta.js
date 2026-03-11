import{$ as c,a as m,r as l,j as d}from"./iframe-CWkvuWTT.js";import{C as n}from"./Calendar-ByPnfWO4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-tBb1UVZf.js";import"./Button-CENR_dMZ.js";import"./utils-DyJgWfbB.js";import"./clsx-B-dksMZM.js";import"./Hidden-BVluWMB8.js";import"./useFocusRing-BH2MioRm.js";import"./index-BqsuNAQb.js";import"./index-BFnZ93le.js";import"./useLabels-jLhadwWQ.js";import"./useButton-3lWcEg9J.js";import"./RSPContexts-CIYffl3s.js";import"./Text-CWck0lXA.js";import"./useDateFormatter-Bn5f3YCZ.js";import"./useControlledState-iyG7ALqN.js";import"./useLocalizedStringFormatter-DWk1Wejp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8IpJFns8.js";import"./useEvent-BRuRWZXg.js";import"./getScrollParent-nBJbQA_k.js";import"./scrollIntoView-Ca_THshf.js";import"./useDescription-x0L1qKYy.js";import"./VisuallyHidden-mePKQ-Q7.js";import"./clsx-Ciqy0D92.js";import"./Button-zWAgsDfI.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bt6bRdGE.js";import"./createLucideIcon-CVtV5ZX2.js";import"./chevron-left-C0NBJJfG.js";import"./chevron-right-gDHDWn-F.js";import"./Heading-LkG1oM-b.js";import"./FieldError-Cc11gFwP.js";import"./Text-wpzgiqlm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
