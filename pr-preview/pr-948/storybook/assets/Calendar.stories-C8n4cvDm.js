import{$ as p,a as m,r as l,j as d}from"./iframe-to6ZPd-o.js";import{C as n}from"./Calendar-BgErnDuC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CztSRnDu.js";import"./Button-BbbNB3BB.js";import"./utils-BaBklhKO.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKtvUpX0.js";import"./useFocusRing-mcA5BXJm.js";import"./index-BF--nVYl.js";import"./index-BCIYHMkX.js";import"./useLabels-D7I-5sOB.js";import"./useButton-CGov8omT.js";import"./RSPContexts-Cl_-pRdh.js";import"./Text-rl71NDZH.js";import"./useDateFormatter-BEdFyGwR.js";import"./useControlledState-D9LO3zyF.js";import"./useLocalizedStringFormatter-he1K6QfO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-vUiqquAV.js";import"./useEvent-BcWNErzH.js";import"./getScrollParent-CrXDP40W.js";import"./scrollIntoView-CSwMpNjZ.js";import"./useDescription-CRtdpkuv.js";import"./VisuallyHidden-rAuGCWJa.js";import"./clsx-Ciqy0D92.js";import"./Button-33ZWPybi.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-aWUqleFc.js";import"./createLucideIcon-DyGCeJBI.js";import"./chevron-right-Jyi9P_4V.js";import"./Heading-C85iSoNW.js";import"./FieldError-kqWMyMLO.js";import"./Text-Fu0lberS.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
