import{$ as c,a as m,r as l,j as d}from"./iframe-CWutqfKR.js";import{C as n}from"./Calendar-BmopQczP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dh7Sc-0Q.js";import"./Button-BnWrQLFg.js";import"./utils-qZdmNmO1.js";import"./clsx-B-dksMZM.js";import"./Hidden-MRIgxKO_.js";import"./useFocusRing-BuUfrlQY.js";import"./index-B_sF5hyi.js";import"./index-CvMFxXqB.js";import"./useLabels-CV5H4iTO.js";import"./useButton-_SFucHjZ.js";import"./RSPContexts-BHcnN_pC.js";import"./Text-CJlC6srz.js";import"./useDateFormatter-DH_mZxYS.js";import"./useControlledState-BVGmSD4F.js";import"./useLocalizedStringFormatter-TUhhiYru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CBRkprSk.js";import"./useEvent-2mXEMkLk.js";import"./getScrollParent-DpRlBU94.js";import"./scrollIntoView-CxEfx6Cs.js";import"./useDescription-B-mxcc0_.js";import"./VisuallyHidden-D9EFy6-j.js";import"./clsx-Ciqy0D92.js";import"./Button-CRDZmgjm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-7pnUr10b.js";import"./createLucideIcon-CEH_8uo-.js";import"./chevron-left-DA8wpljz.js";import"./chevron-right-C5LfERFz.js";import"./Heading-CNCisP1S.js";import"./FieldError-ClytNfPk.js";import"./Text-BwTFzJBU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
