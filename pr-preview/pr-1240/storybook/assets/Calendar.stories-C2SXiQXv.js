import{$ as c,a as m,r as l,j as d}from"./iframe-CbAzJO9N.js";import{C as n}from"./Calendar-BlWl49a5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B8uQdtCp.js";import"./Button-_5CpY_LG.js";import"./utils-B0jB1E5G.js";import"./clsx-B-dksMZM.js";import"./Hidden-j-F0-7Lz.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./RSPContexts-CdwstRL7.js";import"./Text-Cb6mQNAQ.js";import"./useDateFormatter-Cv2KEAPK.js";import"./useControlledState-DjmxdyV_.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bd9Eg1d3.js";import"./useEvent-VV5wi-lK.js";import"./getScrollParent-4mlCzyaP.js";import"./scrollIntoView-CfANcw89.js";import"./useDescription-x0RZZUcB.js";import"./VisuallyHidden-Dhjqn-q1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-g1XodoYM.js";import"./createLucideIcon-lx1Wi4QI.js";import"./chevron-right-BL1ByxOm.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Heading-5Uwbhg9g.js";import"./FieldError-Q76E79z-.js";import"./Text-B0GIqCDR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
