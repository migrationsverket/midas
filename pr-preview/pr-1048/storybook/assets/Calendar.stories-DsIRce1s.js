import{$ as c,a as m,r as l,j as d}from"./iframe-C8C_T9pK.js";import{C as n}from"./Calendar-8e3pCm3_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C4zZcqkE.js";import"./Button-DgcJy71N.js";import"./utils-665vdH3I.js";import"./clsx-B-dksMZM.js";import"./Hidden-BK2dTpyi.js";import"./number-DfkVkf0F.js";import"./useFocusRing-aErJaiMB.js";import"./index-BgFSJS_x.js";import"./index-Bnqj0GEH.js";import"./useLabels-DLIgyPIl.js";import"./useButton-Bir6pOh3.js";import"./RSPContexts-heE_-Jeu.js";import"./Text-oN8gJ-0T.js";import"./useDateFormatter-DQWYrt66.js";import"./useControlledState-CVPSNT_z.js";import"./useLocalizedStringFormatter-D9h1UHb6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DFs_57xi.js";import"./useEvent-CmeL3S54.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3b6CwtQ.js";import"./VisuallyHidden-H5Q5oE0x.js";import"./clsx-Ciqy0D92.js";import"./Button-BjszVOBG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFq-SMx0.js";import"./createLucideIcon-CyML3fXz.js";import"./chevron-left-byP6Qd1P.js";import"./chevron-right-Bqo36pWr.js";import"./Heading-DNNw60WL.js";import"./FieldError--KTQss0Q.js";import"./Text-B2x6FBCA.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
