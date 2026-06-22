import{$ as c,a as m,r as l,j as d}from"./iframe-P3qrm_tw.js";import{C as n}from"./Calendar-CTEeg7Dw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQue2rhw.js";import"./Button-DhFyMRUa.js";import"./utils-Cu9HNXzK.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdxXq6fe.js";import"./useFocusRing-BLJ-Rv5B.js";import"./index-sMyOSi6p.js";import"./index-DWrpe-jF.js";import"./useLabel-CyrOFGd3.js";import"./useLabels-C-xox_2r.js";import"./useButton-Co-DeDts.js";import"./RSPContexts-BPVGWq9w.js";import"./Text-GLSAKrWj.js";import"./useDateFormatter-Fgs7WIFf.js";import"./useControlledState-UTFpRQoc.js";import"./useLocalizedStringFormatter-CJciJbzM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnP4w1c-.js";import"./useEvent-uJeReNRd.js";import"./getScrollParent-DDX5O9pm.js";import"./scrollIntoView-D7nJ6B6R.js";import"./useDescription-Dx_6VVp1.js";import"./VisuallyHidden-BQNLfJdW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B5eHFdTA.js";import"./createLucideIcon-dl19Mkak.js";import"./chevron-right-m_z2L-iN.js";import"./Button-CvMUPzzi.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CDAilngZ.js";import"./Heading-vN4jtE4Y.js";import"./FieldError-BiTTAlmO.js";import"./Text-3plXOlwA.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
