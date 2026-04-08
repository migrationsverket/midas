import{$ as c,a as m,r as l,j as d}from"./iframe-IoRZPpzT.js";import{C as n}from"./Calendar-CIgIWCWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQL2DtiU.js";import"./Button-CVTJNyWz.js";import"./utils-BxE4vEtI.js";import"./clsx-B-dksMZM.js";import"./Hidden-wW-xxMhm.js";import"./useFocusRing-Cfj0kgNA.js";import"./index-C3u5Wnjv.js";import"./index-CWXAEqH-.js";import"./useLabel-Cv3-1VeN.js";import"./useLabels-0sv1QR26.js";import"./useButton-BSTxFbL2.js";import"./RSPContexts-BGd6R71q.js";import"./Text-Bm8kOdo3.js";import"./useDateFormatter-T3e1Tti3.js";import"./useControlledState-BGABXmqM.js";import"./useLocalizedStringFormatter-Dl-vCCz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D9mpqC05.js";import"./useEvent-B1wVgNEN.js";import"./getScrollParent-DwAHZWkX.js";import"./scrollIntoView-36gHvCrJ.js";import"./useDescription-BxymuZdi.js";import"./VisuallyHidden-DVgF-hYp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BwG-Lowb.js";import"./createLucideIcon-D_o_RWfS.js";import"./chevron-right-DsOeSzq7.js";import"./Button-fE-_CYhO.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DWwCwLPP.js";import"./Heading-CkL6u_jg.js";import"./FieldError-BWVbvEBE.js";import"./Text-fDJLlYrf.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
