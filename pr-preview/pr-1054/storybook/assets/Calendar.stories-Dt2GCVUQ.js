import{$ as c,a as m,r as l,j as d}from"./iframe-CYK4t1Gh.js";import{C as n}from"./Calendar-KMNW37-f.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CkoK_iTU.js";import"./Button-DECZbtu5.js";import"./utils-DBHsElOT.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dhsxn_Nf.js";import"./useFocusRing-DWc7f6DB.js";import"./index-BosHGsFI.js";import"./index-CUCu8Kx5.js";import"./useLabels-Dbxh0r6V.js";import"./useButton-O6-M5fpP.js";import"./RSPContexts-BcM39O5Y.js";import"./Text-Ch4tHKq-.js";import"./useDateFormatter-C0LTcU2d.js";import"./useControlledState-D_0fPRZq.js";import"./useLocalizedStringFormatter-BN4ru8sL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Co--t0vY.js";import"./useEvent-GOx7wBQE.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BiSEYNrX.js";import"./VisuallyHidden-4kkr3OtB.js";import"./clsx-Ciqy0D92.js";import"./Button-BE1wltEw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZIAFqP_.js";import"./createLucideIcon-C53JEkqI.js";import"./chevron-left-C2MRZFln.js";import"./chevron-right-DVPp8gOZ.js";import"./Heading-ps86Te0K.js";import"./FieldError-BeOTnay7.js";import"./Text-B_DUIRzD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
