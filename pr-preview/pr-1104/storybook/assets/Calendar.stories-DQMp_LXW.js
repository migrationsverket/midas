import{$ as c,a as m,r as l,j as d}from"./iframe-DgqscTRS.js";import{C as n}from"./Calendar-DbEEavn3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CS2rVz8J.js";import"./Button-BI2DB5nm.js";import"./utils-ihbz_05J.js";import"./clsx-B-dksMZM.js";import"./Hidden-CnPSLy5g.js";import"./useFocusRing-Dhh24Qf7.js";import"./index-BDRZoG0T.js";import"./index-BTEBzuGD.js";import"./useLabels-BVW64SDg.js";import"./useButton-CYDL-Eqv.js";import"./RSPContexts-CP-g27nm.js";import"./Text-DJuD0Zjj.js";import"./useDateFormatter-C0lD2zA_.js";import"./useControlledState-BxU5vAOZ.js";import"./useLocalizedStringFormatter-Cwzoxtmk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CMQSa0bV.js";import"./useEvent-BBYgrCp6.js";import"./getScrollParent-CyRuL-ax.js";import"./scrollIntoView-Ch6Ee1HN.js";import"./useDescription-BEpuG-o8.js";import"./VisuallyHidden-anAyNDA7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D9UDKciR.js";import"./createLucideIcon-vPVORsKq.js";import"./chevron-right-CU9-NcB_.js";import"./Button-CpE1Qe3l.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CetFiEjn.js";import"./Heading-DV4kOouI.js";import"./FieldError-BVwBPTGy.js";import"./Text-BkGEZWiq.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
