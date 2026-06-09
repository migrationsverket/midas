import{$ as c,a as m,r as l,j as d}from"./iframe-6VRTlOeH.js";import{C as n}from"./Calendar-B9L9k1a5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DyAjErq3.js";import"./Button-DLPX01E3.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlTpFa-B.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./RSPContexts-DRe_RyK6.js";import"./Text-CpKvHOvq.js";import"./useDateFormatter-CiXVxmz-.js";import"./useControlledState-pI_U9-IG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQolT4VD.js";import"./useEvent-CA01mw1x.js";import"./getScrollParent-HQ76BiU1.js";import"./scrollIntoView-BdAgwM8B.js";import"./useDescription-VsZXCutT.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-2KbT0ks3.js";import"./createLucideIcon-LiZfCQUd.js";import"./chevron-right-XsW0zaH_.js";import"./Button-CQiZspsF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Heading-OsMCcv5f.js";import"./FieldError-BjyVB-H9.js";import"./Text-BxBOqGEA.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
