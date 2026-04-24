import{$ as c,a as m,r as l,j as d}from"./iframe-Cpv3N_Z7.js";import{C as n}from"./Calendar-BEgzvgvO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-mjHJdz_k.js";import"./Button-yYifVGdg.js";import"./utils-Ds8IarQh.js";import"./clsx-B-dksMZM.js";import"./Hidden-CRjjTzwz.js";import"./useFocusRing-ypjCw1vR.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./RSPContexts-B7j5fLyU.js";import"./Text-CBaNxGOV.js";import"./useDateFormatter-Bs-cjuAa.js";import"./useControlledState-BJT8QsD-.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D0eEjsqV.js";import"./useEvent-ryaXYS60.js";import"./getScrollParent-DFT_DoLJ.js";import"./scrollIntoView-CvDQ6PuP.js";import"./useDescription-zO_rmDkP.js";import"./VisuallyHidden-UFh7Pb-i.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BQu2ZqaR.js";import"./createLucideIcon-CPN07aPY.js";import"./chevron-right-DXeerEM_.js";import"./Button-DMMScCvt.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Heading-DYvz3_Q8.js";import"./FieldError-DDdPNrDK.js";import"./Text-CywvhZI_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
