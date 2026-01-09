import{$ as p,a as m,r as l,j as d}from"./iframe-kbhJnT9w.js";import{C as n}from"./Calendar-tBeltKCl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BBpAruHl.js";import"./Button-CJhwVjkq.js";import"./utils-BIWQukqa.js";import"./clsx-B-dksMZM.js";import"./Hidden-DLSrH6le.js";import"./useFocusRing-D8-czbxO.js";import"./index-zuYBL4Lo.js";import"./index-7Y8nIPcc.js";import"./useLabels-C4BeTwXz.js";import"./useButton-DnRhcX8P.js";import"./RSPContexts-CpYiUO21.js";import"./Text-Bx3yC9L1.js";import"./useDateFormatter-DghPDK0P.js";import"./useControlledState-BmDsoGZM.js";import"./useLocalizedStringFormatter-DnDmMNZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DXfetLTU.js";import"./useEvent-B_EArHEW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DS99e2CE.js";import"./VisuallyHidden-BElvd5Sz.js";import"./clsx-Ciqy0D92.js";import"./Button-2yQDInF3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DENJ27Hf.js";import"./createLucideIcon-MdX6GIq3.js";import"./chevron-right-BgQu5KRU.js";import"./Heading-oKhQjAka.js";import"./FieldError-BjDoFXdk.js";import"./Text-DNo-c8E4.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
