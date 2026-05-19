import{$ as c,a as m,r as l,j as d}from"./iframe-B1G803WZ.js";import{C as n}from"./Calendar-X1gmyIUe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CO8NXjUs.js";import"./Button-BLDI2QQO.js";import"./utils-ZnrybaQS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDSSvdX3.js";import"./useFocusRing-BRG6MU6i.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./RSPContexts-CUgMF8uD.js";import"./Text-CAOAbmad.js";import"./useDateFormatter-LtexTb3a.js";import"./useControlledState-BlM9LERq.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CrxubWsb.js";import"./useEvent-AANzrBKs.js";import"./getScrollParent-CigfJhrW.js";import"./scrollIntoView-D6LN4GJ6.js";import"./useDescription-CwTth-CD.js";import"./VisuallyHidden-B__tRjGj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D9fIZhRK.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./chevron-right-BNVyExV-.js";import"./Button-DU4dwGZ1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Heading-D9vzlIYK.js";import"./FieldError-BgDbsvpf.js";import"./Text-B-AGxk9K.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
