import{$ as c,a as m,r as l,j as d}from"./iframe-DmNPUwJF.js";import{C as n}from"./Calendar-CxeiLclq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BchNKXk8.js";import"./Button-CVX6slyJ.js";import"./utils-Dh-PwKV8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CmDSCNgN.js";import"./useFocusRing-BP4HKvPD.js";import"./index-D7iFWbiU.js";import"./index-zqi-VihA.js";import"./useLabel-x3JXI5A6.js";import"./useLabels-Dtp6pYD3.js";import"./useButton-DpMfdXMB.js";import"./RSPContexts-DpZBoqVv.js";import"./Text-D0ZjjTeW.js";import"./useDateFormatter-DjDulwA6.js";import"./useControlledState-DBKo4wr0.js";import"./useLocalizedStringFormatter-B5MBjwfs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2ghUNgC.js";import"./useEvent-CAbHszQ8.js";import"./getScrollParent-B6jbGFnq.js";import"./scrollIntoView-BHhEhBj7.js";import"./useDescription-DH7N6hrG.js";import"./VisuallyHidden-xsknM-vp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cf2vFJwg.js";import"./createLucideIcon-eE295ZHw.js";import"./chevron-right-C-f3wRlS.js";import"./Button-CBE5oTrg.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CqULl0lq.js";import"./Heading-zwFI5Ywr.js";import"./FieldError-CRuVxlm4.js";import"./Text-C7BN_W1g.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
