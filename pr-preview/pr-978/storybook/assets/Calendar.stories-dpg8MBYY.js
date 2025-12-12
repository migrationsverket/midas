import{$ as c,a as m,r as l,j as d}from"./iframe-CyOFsxEw.js";import{C as n}from"./Calendar-DmHcG1Ad.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CleoSl6X.js";import"./Button-Da0V7IB-.js";import"./utils-GLgclvkH.js";import"./clsx-B-dksMZM.js";import"./Hidden-cFLLFl7x.js";import"./useFocusRing-D8aNkt7i.js";import"./index-CU2F3nqQ.js";import"./index-Cbz2sGVE.js";import"./useLabels-FLdwxISV.js";import"./useButton-DTZgQVqL.js";import"./RSPContexts-VrOQvCF9.js";import"./Text-CmPsAR7I.js";import"./useDateFormatter-BHE3xms-.js";import"./useControlledState-BKJPrLB_.js";import"./useLocalizedStringFormatter-CJ9ubZdj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DlKJoQs8.js";import"./useEvent-YyVnDDf-.js";import"./getScrollParent-B_Ain5hv.js";import"./scrollIntoView-Eu14nWFE.js";import"./useDescription-Dtypy5AE.js";import"./VisuallyHidden-DCfUdHTK.js";import"./clsx-Ciqy0D92.js";import"./Button-DgFwcK1w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BB5TyvbC.js";import"./createLucideIcon-CgjV2Kgp.js";import"./chevron-left-BN0RdKU0.js";import"./chevron-right-Dfr0tL2v.js";import"./Heading-BE1H7Sh7.js";import"./FieldError-C2jTShGg.js";import"./Text-DwafAf6m.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
