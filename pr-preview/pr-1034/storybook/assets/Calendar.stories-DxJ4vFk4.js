import{$ as c,a as m,r as l,j as d}from"./iframe-HG_Z2pg-.js";import{C as n}from"./Calendar-BecDwSW-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C5lyXzxf.js";import"./Button-DAM_PuZi.js";import"./utils-CdY9616D.js";import"./clsx-B-dksMZM.js";import"./Hidden-BkYvshkQ.js";import"./useFocusRing-C2pNSdUj.js";import"./index-CMaq89o6.js";import"./index-iNkvpkXc.js";import"./useLabels-CYZjihjK.js";import"./useButton-gu6J6a7T.js";import"./RSPContexts-rEVBiSVI.js";import"./Text-CPFj8IEW.js";import"./useDateFormatter-VNEUalIT.js";import"./useControlledState-sKIB1QYe.js";import"./useLocalizedStringFormatter-C17LFZpf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DXVQm5aU.js";import"./useEvent-BB0Ydt5c.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BzOv_EiU.js";import"./VisuallyHidden-L0YDRZd4.js";import"./clsx-Ciqy0D92.js";import"./Button-C-MBQNdi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYUm24Kr.js";import"./createLucideIcon-CkaE1DwA.js";import"./chevron-left-Bq0Ysi7P.js";import"./chevron-right-Bbj2MUtX.js";import"./Heading-DuJqlEYV.js";import"./FieldError-CD7fxHOi.js";import"./Text-CKZFwH_2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
