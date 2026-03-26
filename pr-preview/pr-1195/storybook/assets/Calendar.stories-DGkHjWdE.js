import{$ as c,a as m,r as l,j as d}from"./iframe-BgSB-ePP.js";import{C as n}from"./Calendar-DW5ZiX7o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3p3C-Wm.js";import"./Button-Lo8sEzbF.js";import"./utils-C5FyKCk8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CuqOQBO_.js";import"./useFocusRing-CEd5VvO1.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./RSPContexts-Dgg5-u6I.js";import"./Text-BdZEyiog.js";import"./useDateFormatter-DMvPsriQ.js";import"./useControlledState-DJPtRTJ6.js";import"./useLocalizedStringFormatter-DhW77Uj_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BmrCg-RM.js";import"./useEvent-Dxq_2Jhl.js";import"./getScrollParent-DmZ0CDlB.js";import"./scrollIntoView-CjHtu3Nd.js";import"./useDescription-C2lPd98U.js";import"./VisuallyHidden-Bm0pqSKV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BOqPizeN.js";import"./createLucideIcon-B3pidq9m.js";import"./chevron-right-nprHJ1cB.js";import"./Button-BXdJw4HN.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./Heading-_oJ7EFQd.js";import"./FieldError-6w5f847L.js";import"./Text-Bp3gM7sB.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
