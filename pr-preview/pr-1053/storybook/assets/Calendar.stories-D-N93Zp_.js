import{$ as c,a as m,r as l,j as d}from"./iframe-BAZk80fE.js";import{C as n}from"./Calendar-P6CJoMaM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyLwMym_.js";import"./Button-eLqhqo_k.js";import"./utils-BhwQ1U93.js";import"./clsx-B-dksMZM.js";import"./Hidden-CYtm9s7u.js";import"./useFocusRing-KQoMJM9B.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./RSPContexts-Ch508LJX.js";import"./Text-Y_F9Qc3q.js";import"./useDateFormatter-DdQO284F.js";import"./useControlledState-Cu0nMJYp.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cer1WMgl.js";import"./useEvent-vN0H1Ozz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CPqrosz3.js";import"./VisuallyHidden-Coy_xA-f.js";import"./clsx-Ciqy0D92.js";import"./Button-BOvHyuxs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";import"./createLucideIcon-DfErYrVe.js";import"./chevron-left-CMN9SJJW.js";import"./chevron-right-Cxrx7vgT.js";import"./Heading-Dob0vkkd.js";import"./FieldError-DkhBXd6b.js";import"./Text-Bot8P-aJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
