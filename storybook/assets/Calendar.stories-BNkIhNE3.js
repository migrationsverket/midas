import{$ as c,a as m,r as l,j as d}from"./iframe-C7t9iVAP.js";import{C as n}from"./Calendar-CxluhdE8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BdvJJAss.js";import"./Button-DR73eWoN.js";import"./utils-DHL4vNoB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFB5LB9u.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./RSPContexts-CMbSZKKN.js";import"./Text-DHSnms-3.js";import"./useDateFormatter-BmTFZYCC.js";import"./useControlledState-yNJAK2-f.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTQToTt9.js";import"./useEvent-DKYdhuF3.js";import"./getScrollParent-DLQAjZDh.js";import"./scrollIntoView-CXA6LuS7.js";import"./useDescription-CcHmFyqs.js";import"./VisuallyHidden-DGjmnIGg.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DJJLSp3D.js";import"./createLucideIcon-CJwkvU5U.js";import"./chevron-right-5tFhbQJw.js";import"./Button-DtM-QtSV.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";import"./Heading-b7FJGH1A.js";import"./FieldError-D02kFtkC.js";import"./Text-DLwF4mI3.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
