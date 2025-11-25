import{$ as p,a as m,r as l,j as d}from"./iframe-fq9A6FK9.js";import{C as n}from"./Calendar-DI1DF5tD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-a9tM9UiY.js";import"./Button-W9ho1VFG.js";import"./utils-B2shJBpj.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjVuHnC7.js";import"./useFocusRing-NaSrpACO.js";import"./index-DC3OJijG.js";import"./index-DBTT0pcE.js";import"./useLabels-B4JEmX2w.js";import"./useButton-BbvEdJxo.js";import"./RSPContexts-BkNJEeni.js";import"./Text-DMJYBmih.js";import"./useDateFormatter-BvG3kCcW.js";import"./useControlledState-qB5AvSM2.js";import"./useLocalizedStringFormatter-CK759rVD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DsTjEYUR.js";import"./useEvent-BxWGM8jN.js";import"./getScrollParent-CAI0Lw5F.js";import"./scrollIntoView-D-Ul4rw1.js";import"./useDescription-IpFgs4zH.js";import"./VisuallyHidden-CnCvc7Jt.js";import"./clsx-Ciqy0D92.js";import"./Button-BHnqVWV3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Ddt---zu.js";import"./createLucideIcon-CP4QsOlK.js";import"./chevron-right-BA2odLs5.js";import"./Heading-f4rdEv-p.js";import"./FieldError-B7eqknUY.js";import"./Text-DT84MTLn.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
