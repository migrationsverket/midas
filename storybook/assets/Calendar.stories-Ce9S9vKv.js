import{$ as c,a as m,r as l,j as d}from"./iframe-MifYwXyz.js";import{C as n}from"./Calendar-Ehphc4UI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-qPvaP4Sg.js";import"./Button-CKNqLrwF.js";import"./utils-DQEE__1e.js";import"./clsx-B-dksMZM.js";import"./Hidden-BW6dBRkK.js";import"./useFocusRing-CshLtOVp.js";import"./index-C2YaqACl.js";import"./index-CDZjfK_p.js";import"./useLabels-C0p_nmcB.js";import"./useButton-Bi_I7gxU.js";import"./RSPContexts-_MaIYEvI.js";import"./Text-C2SPm1jh.js";import"./useDateFormatter-BfPrjwrW.js";import"./useControlledState-Ck9De9Y4.js";import"./useLocalizedStringFormatter-C3fn2FlC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DVcdbKwy.js";import"./useEvent-Bzi6Lqj5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5ZHxX6H6.js";import"./VisuallyHidden-BKJVLMnZ.js";import"./clsx-Ciqy0D92.js";import"./Button-BcTOGRQL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GZgY9UBY.js";import"./createLucideIcon-Ci3Mi_gr.js";import"./chevron-left-Di3k5VBV.js";import"./chevron-right-CTKFuuty.js";import"./Heading-ypRMm-U6.js";import"./FieldError-909Vsbkt.js";import"./Text-Dt_sqIOk.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
