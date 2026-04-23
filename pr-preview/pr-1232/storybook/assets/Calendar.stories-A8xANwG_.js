import{$ as c,a as m,r as l,j as d}from"./iframe-BYwHSihz.js";import{C as n}from"./Calendar-E7v3_s_C.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BuJLljPO.js";import"./Button-DOnb1gUF.js";import"./utils-Dh-IoFbm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DpptCkiu.js";import"./useFocusRing-DxmY0qcu.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./RSPContexts-BAR4w1ha.js";import"./Text-DJX_2QXd.js";import"./useDateFormatter-Cd80lwih.js";import"./useControlledState-CJUIxKhT.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DSu1XDsn.js";import"./useEvent-CBrs3Ilv.js";import"./getScrollParent-DQgl8KcT.js";import"./scrollIntoView-D2NUCauH.js";import"./useDescription-CMXfddmg.js";import"./VisuallyHidden-2UqtjUFf.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CfslAPNK.js";import"./createLucideIcon-COPS1n-B.js";import"./chevron-right-B1YkA-xH.js";import"./Button-crEn75HL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Heading-CGdHWwLi.js";import"./FieldError-BWBSyxmE.js";import"./Text-BHNKCnwU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
