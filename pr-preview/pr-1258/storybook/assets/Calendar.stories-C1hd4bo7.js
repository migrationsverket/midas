import{$ as c,a as m,r as l,j as d}from"./iframe-CXw6yEtL.js";import{C as n}from"./Calendar-KHbV_5Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ju8rSSdf.js";import"./Button-C2Moqf7z.js";import"./utils-TMTFLosf.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7hcqzmB.js";import"./useFocusRing-BUJw-zNR.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./RSPContexts-CRecp9AH.js";import"./Text-B-ez7dVi.js";import"./useDateFormatter-CCypL9gM.js";import"./useControlledState-uGX0UHSY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsBkk_X3.js";import"./useEvent-CLzgpnys.js";import"./getScrollParent-DI5JJTrt.js";import"./scrollIntoView-J9HcqoeY.js";import"./useDescription-5GU4b1w7.js";import"./VisuallyHidden-DZf8hqs4.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-9dQCqONi.js";import"./createLucideIcon-DWQv9Ysr.js";import"./chevron-right-BmFCeooA.js";import"./Button-DEhxKNaB.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./Heading-E2UPktky.js";import"./FieldError-DxjbVN8c.js";import"./Text-DfSBpgc9.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
