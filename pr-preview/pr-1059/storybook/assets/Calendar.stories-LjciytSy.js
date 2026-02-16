import{$ as c,a as m,r as l,j as d}from"./iframe-CnLjYyDe.js";import{C as n}from"./Calendar-Bxr_hYKh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DMwa9dEQ.js";import"./Button-CDIxZDro.js";import"./utils-PY6vNW2t.js";import"./clsx-B-dksMZM.js";import"./Hidden-CeVZqhsZ.js";import"./useFocusRing-C1Kccm1N.js";import"./index-BZe8XCs4.js";import"./index-Bwgl-PlP.js";import"./useLabels-BGVam2Lm.js";import"./useButton-BI5y_GVj.js";import"./RSPContexts-D780ii40.js";import"./Text-lxQvVvph.js";import"./useDateFormatter-BAKjX-Gj.js";import"./useControlledState-CDg9gtZR.js";import"./useLocalizedStringFormatter-DncuCv5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D-nyIDVn.js";import"./useEvent-YRvbwzIz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bvw6I-Tk.js";import"./VisuallyHidden-DsHhkbAP.js";import"./clsx-Ciqy0D92.js";import"./Button-BssF-2IR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C41SEwV4.js";import"./createLucideIcon-CEFUCq1N.js";import"./chevron-left-CgsP2En1.js";import"./chevron-right-BynVgD7w.js";import"./Heading-CspeW5vm.js";import"./FieldError-Dse4I99A.js";import"./Text-fnyNn8_R.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
