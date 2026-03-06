import{$ as c,a as m,r as l,j as d}from"./iframe-CgL5jpdX.js";import{C as n}from"./Calendar-DeYgoqEG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DqGZXX9R.js";import"./Button-Z-LnhU8E.js";import"./utils-BwYOvAb8.js";import"./clsx-B-dksMZM.js";import"./Hidden-C2oIje6j.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./RSPContexts-TxIrKy65.js";import"./Text-C7o90fsQ.js";import"./useDateFormatter-Bfc624Qg.js";import"./useControlledState-CyaCWJoJ.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-cJInICqi.js";import"./useEvent-DWxTDEgS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B8kyRAqY.js";import"./VisuallyHidden-BsEPRBBE.js";import"./clsx-Ciqy0D92.js";import"./Button-DSLJU119.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./createLucideIcon-CxmWxSan.js";import"./chevron-left-LEWWqT4b.js";import"./chevron-right-Cb56Ae65.js";import"./Heading-YDvkZKr1.js";import"./FieldError-BH_BPKHD.js";import"./Text-MhlqGevy.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
