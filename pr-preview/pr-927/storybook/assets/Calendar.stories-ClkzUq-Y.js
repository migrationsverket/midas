import{$ as p,a as m,r as l,j as d}from"./iframe-BlNSK8M8.js";import{C as n}from"./Calendar-DhqtOCwc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CBoGPpJ5.js";import"./Button-UL3rNHqZ.js";import"./utils-y_Ysi-53.js";import"./clsx-B-dksMZM.js";import"./Hidden-Df5yupSK.js";import"./useFocusRing-n2GNbng4.js";import"./index-BHe3mj7v.js";import"./index-B8FlXCLo.js";import"./useLabels-wei9JXnD.js";import"./useButton-sYL6IkJL.js";import"./RSPContexts-B0gZxzCT.js";import"./Text-Cv88p_mU.js";import"./useDateFormatter-CRzd2A01.js";import"./useControlledState-DcrFjJH-.js";import"./useLocalizedStringFormatter-CeEu-nei.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Caanp67W.js";import"./useEvent-CIITEq7t.js";import"./getScrollParent-pzTc__jH.js";import"./scrollIntoView-ByH1J3Gu.js";import"./useDescription-D-eWW9MU.js";import"./VisuallyHidden-Bp8v6Zzz.js";import"./clsx-Ciqy0D92.js";import"./Button-BQGitBll.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-wU_OqTQp.js";import"./chevron-right-Dou_Mm_v.js";import"./Heading-9wwHT0st.js";import"./FieldError-DhYzCNjI.js";import"./Text-CsuJG2Zh.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
