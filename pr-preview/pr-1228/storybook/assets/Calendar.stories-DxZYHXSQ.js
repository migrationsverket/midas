import{$ as c,a as m,r as l,j as d}from"./iframe-DChMXCrL.js";import{C as n}from"./Calendar-BD-Ti49C.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D3lRUK2T.js";import"./Button-MapMtsGv.js";import"./utils-BplLbAcs.js";import"./clsx-B-dksMZM.js";import"./Hidden-H9l0LVv0.js";import"./useFocusRing-BpLKk3JS.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./RSPContexts-uXDlDre3.js";import"./Text-TXgPlLZT.js";import"./useDateFormatter-BgzZIuQ5.js";import"./useControlledState-ovwSt6hg.js";import"./useLocalizedStringFormatter-CHUWFnrm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DNEahLDn.js";import"./useEvent-KX6gLrPs.js";import"./getScrollParent-Cuy0Pyiw.js";import"./scrollIntoView-qDeDHRgD.js";import"./useDescription-DzqttwPD.js";import"./VisuallyHidden-O06opA_U.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BXrstfxw.js";import"./createLucideIcon-DiQgCGzM.js";import"./chevron-right-BvXkvOHc.js";import"./Button-5OLTPx-2.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./Heading-Bk8iZ59n.js";import"./FieldError-BY3Emi0e.js";import"./Text-CYuY9x3r.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
