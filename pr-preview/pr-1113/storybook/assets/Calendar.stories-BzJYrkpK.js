import{$ as c,a as m,r as l,j as d}from"./iframe-DcNvp08h.js";import{C as n}from"./Calendar-CjkLA50Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D6t_8bzU.js";import"./Button-BXO-nfgy.js";import"./utils-BNNMLtuO.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1kRsClu.js";import"./useFocusRing-BPRwT2-e.js";import"./index-DSSiHOxL.js";import"./index-CP11QsuO.js";import"./useLabels-C5gPRZ5z.js";import"./useButton-BpzNPdXU.js";import"./RSPContexts-DrpcDSg9.js";import"./Text-B8dGyjgo.js";import"./useDateFormatter-BHBprf6E.js";import"./useControlledState-v-JghTjQ.js";import"./useLocalizedStringFormatter-CfHv0oEA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPQqLqeb.js";import"./useEvent-DdukWOBV.js";import"./getScrollParent-qiJZOE97.js";import"./scrollIntoView-BaDrcpSF.js";import"./useDescription-CjIg25md.js";import"./VisuallyHidden-BvqUxAVU.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DsFEDgFw.js";import"./createLucideIcon-CgIMhL8N.js";import"./chevron-right-C09ynIgG.js";import"./Button-Btc6I3Hp.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CwX-QJhh.js";import"./Heading-CbxVV3aG.js";import"./FieldError-EMbUKL48.js";import"./Text-BTXvFjJ1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
