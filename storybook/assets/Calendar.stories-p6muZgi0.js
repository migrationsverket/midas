import{$ as c,a as m,r as l,j as d}from"./iframe-B1eD605p.js";import{C as n}from"./Calendar-zeGqBqDH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BNbxrsAV.js";import"./Button-DMefbg_Z.js";import"./utils-BOUcnJoC.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3lfQGCO.js";import"./useFocusRing-D_OiBDkF.js";import"./index-BWkRMe8I.js";import"./index-TufsVr0_.js";import"./useLabel-D7VH59ae.js";import"./useLabels-BD-zpGYP.js";import"./useButton-B9teiuVu.js";import"./RSPContexts-Dl1zhDr2.js";import"./Text-DAxM1VuH.js";import"./useDateFormatter-BkkdSBD5.js";import"./useControlledState-DOfAUcES.js";import"./useLocalizedStringFormatter-BVzW25Bt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CR1eGAMt.js";import"./useEvent-BJos8xnR.js";import"./getScrollParent-1L3daVvs.js";import"./scrollIntoView-DZVXXs-a.js";import"./useDescription-Bqwk-ftC.js";import"./VisuallyHidden-D_M3vS6z.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-3SDlCooY.js";import"./createLucideIcon-B1NmALCH.js";import"./chevron-right-CU4iIQ2w.js";import"./Button-vXlcn_Zz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CLR4R1lI.js";import"./Heading-Du1XGRCs.js";import"./FieldError-DNdCu579.js";import"./Text-EI0dskfY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
