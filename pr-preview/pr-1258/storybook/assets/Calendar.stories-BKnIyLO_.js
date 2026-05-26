import{$ as c,a as m,r as l,j as d}from"./iframe-DE3udc98.js";import{C as n}from"./Calendar-C6bJmjPd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DpOBJe1x.js";import"./Button-WyeeTejZ.js";import"./utils-BZFqyVfK.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3N7s3Fy.js";import"./useFocusRing-Zfbb9wtm.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./RSPContexts-DDA8iB-A.js";import"./Text-B_7CE5hn.js";import"./useDateFormatter-B2p9ew2A.js";import"./useControlledState-CKJ2TdtV.js";import"./useLocalizedStringFormatter-C2IC4Uej.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D4lhKZMt.js";import"./useEvent-Bsmzdkq1.js";import"./getScrollParent-CISTh7Q2.js";import"./scrollIntoView-CopONKPx.js";import"./useDescription-DUhpeiqJ.js";import"./VisuallyHidden-JI0zcCIW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dl3DEpgU.js";import"./createLucideIcon-DBgVndRE.js";import"./chevron-right-BrqZ0IPM.js";import"./Button-D9EvRssF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./Heading-FDPSjiuZ.js";import"./FieldError-HOINxNuD.js";import"./Text-6UvYXfTp.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
