import{$ as c,a as m,r as l,j as d}from"./iframe-Bbu1_rOe.js";import{C as n}from"./Calendar-Bo8gmrtM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BL_KxeUF.js";import"./Button-BfBJNH2a.js";import"./utils-DzUH-LiJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DIc6BQrj.js";import"./useFocusRing-DktvivXH.js";import"./index-Gy34tXsq.js";import"./index-BjrDVlup.js";import"./useLabels-Dh87fkX6.js";import"./useButton-qeywHX_w.js";import"./RSPContexts-DpwWeNGS.js";import"./Text-I1JxsJhT.js";import"./useDateFormatter-CcxB3sqg.js";import"./useControlledState-C-Y-9GQh.js";import"./useLocalizedStringFormatter-B-Hd1imC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-fL8VrSmO.js";import"./useEvent-b0-AAngS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CKADf4-J.js";import"./VisuallyHidden-Bmla7vNF.js";import"./clsx-Ciqy0D92.js";import"./Button-DiLNuEQM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-7EqjOiW5.js";import"./createLucideIcon-QX8cppGT.js";import"./chevron-left-DWKLC_7P.js";import"./chevron-right-C1MqA6wG.js";import"./Heading-6aaRBt_3.js";import"./FieldError-CkqjPv4F.js";import"./Text-BWc7fTRi.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
