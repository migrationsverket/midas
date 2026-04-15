import{$ as c,a as m,r as l,j as d}from"./iframe-Co8ouiR0.js";import{C as n}from"./Calendar-DRbqwoae.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQkGb_9d.js";import"./Button-BP9TK4Xh.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./Hidden-TJ2PhhZw.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./RSPContexts-DtYDmIKY.js";import"./Text-DtfYRBf1.js";import"./useDateFormatter-E5tIXHxi.js";import"./useControlledState-CaplsX9m.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-9tSZ3x0q.js";import"./useEvent-Cm1cXmjt.js";import"./getScrollParent-BedhNeW7.js";import"./scrollIntoView-DvPgTXx8.js";import"./useDescription-HAOJ4Hrg.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DtZCW9Ea.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./chevron-right-DScArUeQ.js";import"./Button-BOgReN_Q.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Heading-BCJk9rok.js";import"./FieldError-CEGfntdp.js";import"./Text-B5_C6N3n.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
