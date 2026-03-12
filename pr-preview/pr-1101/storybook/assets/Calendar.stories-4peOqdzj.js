import{$ as c,a as m,r as l,j as d}from"./iframe-CSEJNTkK.js";import{C as n}from"./Calendar-2BO8vWA2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DinXqlkt.js";import"./Button-C9VKeO5Q.js";import"./utils-DeJFKvWK.js";import"./clsx-B-dksMZM.js";import"./Hidden-UvxDhw7H.js";import"./useFocusRing-DrHJkNXb.js";import"./index-D143hsf1.js";import"./index-BMO83btm.js";import"./useLabels-BgO5uamo.js";import"./useButton-BhgtOeCo.js";import"./RSPContexts-zt9dEm9A.js";import"./Text-D9jZWUtn.js";import"./useDateFormatter-zibDxB3f.js";import"./useControlledState-B4wBbeGG.js";import"./useLocalizedStringFormatter-BfRcdDUG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-3zUkRXnj.js";import"./useEvent-DJ2zukRQ.js";import"./getScrollParent-BjkCtlKv.js";import"./scrollIntoView-fZBPi3kj.js";import"./useDescription-FN-9a8Gv.js";import"./VisuallyHidden-D49iMATH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CVP1D90l.js";import"./createLucideIcon-ttv-_pDn.js";import"./chevron-right-1TzJu5AU.js";import"./Button-BNNwT8-I.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQyjPzmq.js";import"./Heading-L0LPPdCM.js";import"./FieldError-H0rNPMcB.js";import"./Text-BZVryx1n.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
