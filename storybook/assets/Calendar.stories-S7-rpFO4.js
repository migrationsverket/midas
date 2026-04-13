import{$ as c,a as m,r as l,j as d}from"./iframe-XBMlEgFB.js";import{C as n}from"./Calendar-bxxaKZpj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CwMvK_vf.js";import"./Button-BzKQzIb5.js";import"./utils-Cc5G8ViG.js";import"./clsx-B-dksMZM.js";import"./Hidden-DmPMVnI9.js";import"./useFocusRing-DuQiYGUN.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./RSPContexts-CjMPhbqA.js";import"./Text-86sbONsT.js";import"./useDateFormatter-bRNx1Ljc.js";import"./useControlledState-DEjZXUVu.js";import"./useLocalizedStringFormatter-Bu_qbSQ2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-NSOZ5sOg.js";import"./useEvent-BKpTOEzW.js";import"./getScrollParent-D5DjdUZx.js";import"./scrollIntoView-BbcvzxoF.js";import"./useDescription-BL_Y3ATo.js";import"./VisuallyHidden-C4noZ6lE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CS1YtRoP.js";import"./createLucideIcon-CPar-zam.js";import"./chevron-right-Du-40HeZ.js";import"./Button-CkmlK4go.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./Heading-ekHWI8iy.js";import"./FieldError-qc1sXTm5.js";import"./Text-BZ6aPD5a.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
