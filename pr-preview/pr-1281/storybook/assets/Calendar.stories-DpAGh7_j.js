import{$ as c,a as m,r as l,j as d}from"./iframe-CMUT-aY9.js";import{C as n}from"./Calendar-CfkmKP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BlI8RvEg.js";import"./Button-CgVVJh0n.js";import"./utils-x-Fz6ypf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BmEcMQf3.js";import"./useFocusRing-D378a6oQ.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./RSPContexts-CAfUuHUZ.js";import"./Text-BjIPArye.js";import"./useDateFormatter-DvyNTV43.js";import"./useControlledState-BVAe2WbZ.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D6cz-3oy.js";import"./useEvent-Bali3OPG.js";import"./getScrollParent-BxpbEdf1.js";import"./scrollIntoView-Dk0hb8O6.js";import"./useDescription-BGt3XOT5.js";import"./VisuallyHidden-CLkRcp8r.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-yUPez-fE.js";import"./createLucideIcon-B4JXtaTl.js";import"./chevron-right-HApeiwdH.js";import"./Button-BLzEeOtL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BhfoWyv5.js";import"./Heading-ZZ174H7o.js";import"./FieldError-BcWgF-Sz.js";import"./Text-CdDgL-we.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
