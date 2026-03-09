import{$ as c,a as m,r as l,j as d}from"./iframe-kd_AoAeF.js";import{C as n}from"./Calendar-B2nnn2LD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CtvgazYz.js";import"./Button-DeJMe7Hb.js";import"./utils-rNhv6-p5.js";import"./clsx-B-dksMZM.js";import"./Hidden-CVTUXncE.js";import"./useFocusRing-DAtTESdQ.js";import"./index-Co1AZiIR.js";import"./index-C8QvYmrM.js";import"./useLabels-0qTjz8uQ.js";import"./useButton-CrwZeUwe.js";import"./RSPContexts-Dduov18O.js";import"./Text-0B35jr2S.js";import"./useDateFormatter-B1g8PRQB.js";import"./useControlledState-BFxViZ9m.js";import"./useLocalizedStringFormatter-B8gC_nki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLWRZr-q.js";import"./useEvent-ClTqOmjP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-XJhiBPR3.js";import"./VisuallyHidden-DSv4Z3AK.js";import"./clsx-Ciqy0D92.js";import"./Button-CGXac9yi.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DfD4_B_y.js";import"./createLucideIcon-DYqnFHX_.js";import"./chevron-left-DMopYLhe.js";import"./chevron-right-GKbryVtg.js";import"./Heading-CDuh6Ueo.js";import"./FieldError-n3fvYIN_.js";import"./Text-DhCHaZIC.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
