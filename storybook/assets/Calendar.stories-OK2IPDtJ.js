import{$ as c,a as m,r as l,j as d}from"./iframe-HOh296WD.js";import{C as n}from"./Calendar-CeFRytDO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPSsirU7.js";import"./Button-WtWoZgXq.js";import"./utils-DZ8gsIC2.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cnam6lCF.js";import"./useFocusRing-DYVJSnUE.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./RSPContexts-d4Cds5di.js";import"./Text-B6416v9E.js";import"./useDateFormatter-BJEWMedO.js";import"./useControlledState-Bg0Nqr_y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-WGwIJDUw.js";import"./useEvent-CtSfpuPP.js";import"./getScrollParent-CvmsooRi.js";import"./scrollIntoView-lPtJp7l_.js";import"./useDescription-D6Cyf8Wc.js";import"./VisuallyHidden-C9pq-kak.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-b1CuSHPB.js";import"./createLucideIcon-NVlRk-Ze.js";import"./chevron-right-CNQ_ylJr.js";import"./Button-BYcFvZWu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Heading-CFbybLxg.js";import"./FieldError-D6lU0Pje.js";import"./Text-Bv9eh8EN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
