import{$ as c,a as m,r as l,j as d}from"./iframe-COQoy-tb.js";import{C as n}from"./Calendar-DU_7vWry.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C4sIwBFz.js";import"./Button-6ISKDJI6.js";import"./utils-dUj1FPII.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNwHy1Fg.js";import"./useFocusRing-KEMdm9OC.js";import"./index-D-LNSu5d.js";import"./index-Cy0cFfBq.js";import"./useLabels-Dul859Iz.js";import"./useButton-C5PyE_o4.js";import"./RSPContexts-DCzfJS37.js";import"./Text-B03ZqDJP.js";import"./useDateFormatter-VVceVQ2O.js";import"./useControlledState-BLJZbN0w.js";import"./useLocalizedStringFormatter-CW4fmwCZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BAmtRqDg.js";import"./useEvent-CZ9ssVuG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-QKLqNAEk.js";import"./VisuallyHidden-Cxp4MCQV.js";import"./clsx-Ciqy0D92.js";import"./Button-COWVz2rh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-ESf0SP.js";import"./createLucideIcon-uFOmHGhK.js";import"./chevron-left-DCKlezJi.js";import"./chevron-right-iDa-22_O.js";import"./Heading-DKzcd0sJ.js";import"./FieldError-lHGiCpDB.js";import"./Text-C_IsDOQl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
