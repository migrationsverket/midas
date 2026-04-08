import{$ as c,a as m,r as l,j as d}from"./iframe-DeJZYfs6.js";import{C as n}from"./Calendar-CTgVa45U.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CG9IscmN.js";import"./Button-TyrtoBf7.js";import"./utils-CVaTJ4pr.js";import"./clsx-B-dksMZM.js";import"./Hidden-CpOEnTcU.js";import"./useFocusRing-EUZ5WM39.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./RSPContexts-BW4hyt92.js";import"./Text-DiI9AjCa.js";import"./useDateFormatter-DLHu6xj1.js";import"./useControlledState-e4htfzmn.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKlEp44w.js";import"./useEvent-Prn2T694.js";import"./getScrollParent-cyrVl-ro.js";import"./scrollIntoView-CmHT6ElZ.js";import"./useDescription-DM4YbjnM.js";import"./VisuallyHidden-C7trIB5i.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BdGbCpK6.js";import"./createLucideIcon-BN41fbAL.js";import"./chevron-right-DnRKxrJd.js";import"./Button-7AU2H28z.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Heading-OxyOCkj5.js";import"./FieldError-Bu4wLSzH.js";import"./Text-BDvIHgKo.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
