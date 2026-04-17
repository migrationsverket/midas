import{$ as c,a as m,r as l,j as d}from"./iframe-BspZq9tj.js";import{C as n}from"./Calendar-DMJmr1Ai.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B2FJ5ato.js";import"./Button-W6h6LqJQ.js";import"./utils-DAmpme0n.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxNHn6hu.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./RSPContexts-CPwEBVvI.js";import"./Text-DJFK0YJf.js";import"./useDateFormatter-Do-deB4F.js";import"./useControlledState-BFbpEbwN.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaxejOY1.js";import"./useEvent-SgyYcF3m.js";import"./getScrollParent-DmWmoZNO.js";import"./scrollIntoView-BoOeRgl-.js";import"./useDescription-D5AIqWjS.js";import"./VisuallyHidden-mXHZbk3a.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DUBxIjIm.js";import"./createLucideIcon-DZ4T53Ud.js";import"./chevron-right-0boEhbcP.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Heading-2memYd0M.js";import"./FieldError-CWZFsZje.js";import"./Text-D4utVkCo.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
