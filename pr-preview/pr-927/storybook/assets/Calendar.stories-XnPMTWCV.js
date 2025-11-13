import{$ as p,a as m,r as l,j as d}from"./iframe-CBYo7kOx.js";import{C as n}from"./Calendar-CX6MgZ4k.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BiTI5gug.js";import"./Button-Y7Y0wc_X.js";import"./utils-CQQdeSwH.js";import"./clsx-B-dksMZM.js";import"./Hidden-Di33FxQR.js";import"./useFocusRing-pPubhNZo.js";import"./index-xwlOjluI.js";import"./index-DFpmMCSI.js";import"./useLabels-B9_I_hZt.js";import"./useButton--YtF3u4m.js";import"./RSPContexts-DDay4zhV.js";import"./Text-BG1lNmg-.js";import"./useDateFormatter-Bpjcojvv.js";import"./useControlledState-DUwb5fNf.js";import"./useLocalizedStringFormatter-CkQti2eL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CbYXF0pc.js";import"./useEvent-DnWZsab6.js";import"./getScrollParent-DG4JI8Dt.js";import"./scrollIntoView-fUM1akbq.js";import"./useDescription-9cbwslIt.js";import"./VisuallyHidden-B6XBnINU.js";import"./clsx-Ciqy0D92.js";import"./Button-CUH9DE-U.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-dtR5yiUS.js";import"./chevron-right-BprOU5oK.js";import"./Heading-Dz1ZXTGp.js";import"./FieldError-C58NRRtK.js";import"./Text-6Hj94soN.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
