import{$ as c,a as m,r as l,j as d}from"./iframe-BQVZAmhX.js";import{C as n}from"./Calendar-BCUdM18o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B-5ZA7_S.js";import"./Button-DaQviGRz.js";import"./utils-DBGKxhvy.js";import"./clsx-B-dksMZM.js";import"./Hidden-uNYSXgwc.js";import"./useFocusRing-CZ1ppHUm.js";import"./index-DhVWvG0v.js";import"./index-jPah0Wh4.js";import"./useLabels-C7gSAdoi.js";import"./useButton-BLpyZZ6H.js";import"./RSPContexts-cGmYjQmV.js";import"./Text-Cl7VN2WD.js";import"./useDateFormatter-DhUECq2Y.js";import"./useControlledState-BzTnjfw8.js";import"./useLocalizedStringFormatter-D1gRfOcs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BgyRDdc0.js";import"./useEvent-BA49tokg.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BP2VHTY6.js";import"./VisuallyHidden-CKyjCtbn.js";import"./clsx-Ciqy0D92.js";import"./Button-CFZ90YqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sLwEt4tr.js";import"./createLucideIcon-BEZFPsZb.js";import"./chevron-left-BDDv3CuO.js";import"./chevron-right-DKJKSDtA.js";import"./Heading-CExc05Da.js";import"./FieldError-Dvo9z3NV.js";import"./Text-BDOgt3-X.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
