import{$ as c,a as m,r as l,j as d}from"./iframe-yRPWKz3A.js";import{C as n}from"./Calendar-BjJKQTow.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5RRONjR.js";import"./Button-D8bYImzz.js";import"./utils-YVdcHFiv.js";import"./clsx-B-dksMZM.js";import"./Hidden-DZj0yzJG.js";import"./number-DfkVkf0F.js";import"./useFocusRing-CAbobd4s.js";import"./index-CcWiq_3n.js";import"./index-DUJFKGcA.js";import"./useLabels-Xwis0UQD.js";import"./useButton-BMOjGRCO.js";import"./RSPContexts-BcvAwuF9.js";import"./Text-BN91Y8yX.js";import"./useDateFormatter-U4XR0usv.js";import"./useControlledState-BarJv6Wp.js";import"./useLocalizedStringFormatter-jogrdBwj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZLF7CaDQ.js";import"./useEvent-a-O8nmXP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bug5IgMM.js";import"./VisuallyHidden-Cc0Z01Ry.js";import"./clsx-Ciqy0D92.js";import"./Button-DGlNCwfb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8EuLi5lS.js";import"./createLucideIcon-Cf0XVHZS.js";import"./chevron-left-E-cNqhZV.js";import"./chevron-right-BR1OMZea.js";import"./Heading-8u8ti_cc.js";import"./FieldError-DMHHwpAd.js";import"./Text-LxP77sjg.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
