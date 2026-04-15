import{$ as c,a as m,r as l,j as d}from"./iframe-BQ0rH5Sa.js";import{C as n}from"./Calendar-BPf42T0y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B46kcXVr.js";import"./Button-BWU_U6pL.js";import"./utils-BbCSG2Ds.js";import"./clsx-B-dksMZM.js";import"./Hidden-B903bi5e.js";import"./useFocusRing-CUcWLsdz.js";import"./index-BRzOPMdu.js";import"./index-B9nWUi91.js";import"./useLabel-G48bLjJ4.js";import"./useLabels-Btdu3CAb.js";import"./useButton-D_NyLkoF.js";import"./RSPContexts-DXFVYlMo.js";import"./Text-Uu1ScPl1.js";import"./useDateFormatter-D3dpthyB.js";import"./useControlledState-Bj7Wg3w8.js";import"./useLocalizedStringFormatter-yem2oIc6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ce28wpaI.js";import"./useEvent-CV3GCwBx.js";import"./getScrollParent-DbuXa8OY.js";import"./scrollIntoView-BZLVH2bl.js";import"./useDescription-n70PdxFN.js";import"./VisuallyHidden-PaW3vCB4.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CvZryNld.js";import"./createLucideIcon-CmTdOvE9.js";import"./chevron-right-BofPMOk8.js";import"./Button-xgeMudhK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-87HHeiEB.js";import"./Heading-CLHofvwk.js";import"./FieldError-DF9g5RSV.js";import"./Text-rQ7Pcap6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
