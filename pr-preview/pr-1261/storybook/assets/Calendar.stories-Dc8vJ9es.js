import{$ as c,a as m,r as l,j as d}from"./iframe-DdBf1SRL.js";import{C as n}from"./Calendar-CToqt1Xw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C0N7682a.js";import"./Button-DfVfuE86.js";import"./utils-DMchxVzX.js";import"./clsx-B-dksMZM.js";import"./Hidden-DnCBwxQo.js";import"./useFocusRing-B7kbWjnk.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./RSPContexts-DeLkFkii.js";import"./Text-BubyCo8k.js";import"./useDateFormatter-DCZHvh4I.js";import"./useControlledState-aSEVnCiN.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPY-XS72.js";import"./useEvent-DSMuUAnY.js";import"./getScrollParent-FpAGmNqP.js";import"./scrollIntoView-BZzoMKS8.js";import"./useDescription-zrMNjBsf.js";import"./VisuallyHidden-TAipgByj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-dTjkUK1Q.js";import"./createLucideIcon-DMjdayIV.js";import"./chevron-right-CJ80ocSV.js";import"./Button-BcNKuXh9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Heading-0gJfGgeH.js";import"./FieldError-CxsQvr-l.js";import"./Text-Crsqw0eJ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
