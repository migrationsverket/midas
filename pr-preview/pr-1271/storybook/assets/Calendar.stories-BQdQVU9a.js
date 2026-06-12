import{$ as c,a as m,r as l,j as d}from"./iframe-CO-gAPhX.js";import{C as n}from"./Calendar-yiVf4J6S.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CktoqGjU.js";import"./Button-DXT5LjXI.js";import"./utils-k2fUJOcg.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYpeRQWv.js";import"./useFocusRing-BUNiQTJz.js";import"./index-DMx7-GyY.js";import"./index-CwA1oRHE.js";import"./useLabel-CFHzh0vI.js";import"./useLabels-BDaY_wZ1.js";import"./useButton-M9CtI4R_.js";import"./RSPContexts-Bk8niJAv.js";import"./Text-dYy03QVX.js";import"./useDateFormatter-_-W3UvP9.js";import"./useControlledState-DiHS_28D.js";import"./useLocalizedStringFormatter-Ckla6k3E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-YSJS4hxp.js";import"./useEvent-VKhVlozG.js";import"./getScrollParent-Byv4kQvn.js";import"./scrollIntoView-D1OpogIN.js";import"./useDescription-tJJWr6K2.js";import"./VisuallyHidden-CKCCpPT0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cu_ownqo.js";import"./createLucideIcon-BnizQjgj.js";import"./chevron-right-aDXhkolO.js";import"./Button-CYSOGzux.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CP5Hjs4T.js";import"./Heading-Dh7jH3yH.js";import"./FieldError-BaYlcMBl.js";import"./Text-B90d5phV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
