import{$ as c,a as m,r as l,j as d}from"./iframe-Ct1ppXcO.js";import{C as n}from"./Calendar-fQPIUVJe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ChtyiZRU.js";import"./Button-Co_Oqhu6.js";import"./utils-C-gSI02s.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnjpnQVL.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./RSPContexts-DiUMKu6B.js";import"./Text-bA96Aj1V.js";import"./useDateFormatter-B9bB3c6c.js";import"./useControlledState-BMKsiY2b.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PF7DIFvS.js";import"./useEvent-CQqH1fQz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D0KYtWwq.js";import"./VisuallyHidden-CPthcFHg.js";import"./clsx-Ciqy0D92.js";import"./Button-DGYQQhVQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./createLucideIcon-BuchYPst.js";import"./chevron-left-B_nKoFV8.js";import"./chevron-right-B94eMlFm.js";import"./Heading-8Bvul9yl.js";import"./FieldError-MCWN8uVd.js";import"./Text-BLnUO4XT.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
