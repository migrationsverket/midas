import{$ as c,a as m,r as l,j as d}from"./iframe-DG8sLAOy.js";import{C as n}from"./Calendar-BKHHAxpb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BMEYu_8f.js";import"./Button-e9hh4zze.js";import"./utils-DLAFhier.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYn-neub.js";import"./useFocusRing-mNkvIRfY.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./RSPContexts-CMJFVu7E.js";import"./Text-BL7Sfi9Q.js";import"./useDateFormatter-DGI4qcIE.js";import"./useControlledState-RiscT5mJ.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-3Gy1iKnt.js";import"./useEvent-VtbUIOmB.js";import"./getScrollParent-BX7WBRu0.js";import"./scrollIntoView-DA1Ufw7z.js";import"./useDescription-CvEQI5cY.js";import"./VisuallyHidden-CYqYwLo_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CmApwdMt.js";import"./createLucideIcon-CiRaq98A.js";import"./chevron-right-B9AXl1aS.js";import"./Button-D1u3zQ32.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Heading-DXcU2JCi.js";import"./FieldError-DWs4hNvn.js";import"./Text-BnRQmBDY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
