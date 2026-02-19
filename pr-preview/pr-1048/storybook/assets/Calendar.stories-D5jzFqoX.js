import{$ as c,a as m,r as l,j as d}from"./iframe-DvfEE2EA.js";import{C as n}from"./Calendar-HiYYudm6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-pujHA0sV.js";import"./Button-BEsFQT6R.js";import"./utils-EccCoJST.js";import"./clsx-B-dksMZM.js";import"./Hidden-E4LKVjJ3.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DvRoLobF.js";import"./index-C-FPbYY0.js";import"./index-C-7AJHKG.js";import"./useLabels-BDWRbz34.js";import"./useButton-Cby6Hv6a.js";import"./RSPContexts-BybK4INx.js";import"./Text-CYxj4XUp.js";import"./useDateFormatter-Du00QulO.js";import"./useControlledState-BMOgnCDq.js";import"./useLocalizedStringFormatter-7gPqsvUW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-hMT7ev8Z.js";import"./useEvent-Dt-7Obwe.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHTjELwq.js";import"./VisuallyHidden-DJTtwLDL.js";import"./clsx-Ciqy0D92.js";import"./Button-CA8_LeWe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CdetPKX0.js";import"./createLucideIcon-BJb0Fm1J.js";import"./chevron-left-CrToRFU5.js";import"./chevron-right-BwvyPUrc.js";import"./Heading-B7XRRO6d.js";import"./FieldError-DJlVVmti.js";import"./Text-JM8wZQts.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
