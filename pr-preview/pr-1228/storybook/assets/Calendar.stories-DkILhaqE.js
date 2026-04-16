import{$ as c,a as m,r as l,j as d}from"./iframe-Bv6YAP-H.js";import{C as n}from"./Calendar-D3wrBmWv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BqNNjbU1.js";import"./Button-1f9Yc7Mz.js";import"./utils-aKxnkjqL.js";import"./clsx-B-dksMZM.js";import"./Hidden-DhnPUChE.js";import"./useFocusRing-vLQdNIKu.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./RSPContexts-Cmel4BHs.js";import"./Text-CrHwImJG.js";import"./useDateFormatter-CvGOUdn7.js";import"./useControlledState-CcT1w6-I.js";import"./useLocalizedStringFormatter-BTXjr0WF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BWfLRk6t.js";import"./useEvent-BaPHHBlD.js";import"./getScrollParent-CmM-5YOM.js";import"./scrollIntoView-CfOu5aQk.js";import"./useDescription-y5DJBmVT.js";import"./VisuallyHidden-DEiD2GQe.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-AKf7mpsx.js";import"./createLucideIcon-DlyUrHS2.js";import"./chevron-right-7ErSGD5D.js";import"./Button-BH5A087H.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./Heading-oW__33Cy.js";import"./FieldError-aQet2mym.js";import"./Text-DPW0E3tR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
