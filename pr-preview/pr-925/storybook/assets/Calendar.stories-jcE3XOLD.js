import{$ as p,a as m,r as l,j as d}from"./iframe-vngjZ-4P.js";import{C as n}from"./Calendar-DkaXwKxA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLVM1Hx0.js";import"./Button-BC9sg2r9.js";import"./utils-DHeliekZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bz5znElO.js";import"./useFocusRing-DUbxX868.js";import"./index-CvXFvuDV.js";import"./index-ukHcnXjJ.js";import"./useLabels-se4Xxikx.js";import"./useButton-Dc_1rKgZ.js";import"./RSPContexts-1mbHIt5l.js";import"./Text-BbKxmc2D.js";import"./useDateFormatter-esRlyEqR.js";import"./useControlledState-TuR8R_1y.js";import"./useLocalizedStringFormatter-CZE4fUbg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDF8NYOP.js";import"./useEvent-DtJ9s--c.js";import"./getScrollParent-BN7bdp6P.js";import"./scrollIntoView-3eYklhXT.js";import"./useDescription-DyNeAMeF.js";import"./VisuallyHidden-b4ZPYca2.js";import"./clsx-Ciqy0D92.js";import"./Button-fRzOyLJW.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CJOpBfq1.js";import"./chevron-right-CYXtYByG.js";import"./Heading-pu9kpDJD.js";import"./FieldError-DztSinTd.js";import"./Text-By4ps0no.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
