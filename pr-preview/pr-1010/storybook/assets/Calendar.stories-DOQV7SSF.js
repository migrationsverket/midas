import{$ as c,a as m,r as l,j as d}from"./iframe-CdV99NDU.js";import{C as n}from"./Calendar-oCgQAtAr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C4Y7paZp.js";import"./Button-pO8fiD1O.js";import"./utils-CMfRIaXv.js";import"./clsx-B-dksMZM.js";import"./Hidden-B5huBJsQ.js";import"./useFocusRing-e9aHRU6a.js";import"./index-BzgysReL.js";import"./index-yHLZSSmE.js";import"./useLabels-BD260d70.js";import"./useButton-KkSusS_w.js";import"./RSPContexts-aiXnIDGZ.js";import"./Text-DrXygMM2.js";import"./useDateFormatter-Bndq_p_G.js";import"./useControlledState-RbaACq8P.js";import"./useLocalizedStringFormatter-Bp1Nt6ma.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-vOVr9AbN.js";import"./useEvent-CUH_UTTo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CMkoGRwr.js";import"./VisuallyHidden-B5phWBq7.js";import"./clsx-Ciqy0D92.js";import"./Button-Dfhqrxs-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dbxw2dmh.js";import"./createLucideIcon-B6F2wH1H.js";import"./chevron-left-ChkZM9u7.js";import"./chevron-right-CWZIHsKi.js";import"./Heading-CJMyDpVX.js";import"./FieldError-CzkKIm6d.js";import"./Text-C43rwyi-.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
