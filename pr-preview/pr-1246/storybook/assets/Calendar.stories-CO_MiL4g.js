import{$ as c,a as m,r as l,j as d}from"./iframe-CkvNFrYQ.js";import{C as n}from"./Calendar-Dg3QrT5A.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CxZxAHkr.js";import"./Button-vUvfAWls.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bsx77DlA.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./RSPContexts-DGIABOWW.js";import"./Text-DIpvUzoX.js";import"./useDateFormatter-BJJA0g6J.js";import"./useControlledState-Dmid9ay2.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Hr8RCabG.js";import"./useEvent-DbWchgAK.js";import"./getScrollParent-Dj3KhtFY.js";import"./scrollIntoView-CCwmtkiF.js";import"./useDescription-CapqPYkv.js";import"./VisuallyHidden-DC7QTvoq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CcfCi57t.js";import"./createLucideIcon-CeEwKqzx.js";import"./chevron-right-DZowz-Z7.js";import"./Button-D17vaezS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Heading-Bxkil-M5.js";import"./FieldError-BN50R8Gs.js";import"./Text-DsB1bVac.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
