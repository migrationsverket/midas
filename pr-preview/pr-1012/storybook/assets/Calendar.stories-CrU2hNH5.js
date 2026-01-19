import{$ as c,a as m,r as l,j as d}from"./iframe-BEJN6Kxj.js";import{C as n}from"./Calendar-DWxnUhZp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D7vxU-XC.js";import"./Button-w6H2Sg3d.js";import"./utils-CrGBDRkS.js";import"./clsx-B-dksMZM.js";import"./Hidden-fVuPKruJ.js";import"./useFocusRing-eqCY1XUY.js";import"./index-D62Nhkqi.js";import"./index-h8IQGtJP.js";import"./useLabels-NwX4Qgl6.js";import"./useButton-9wB6vFCI.js";import"./RSPContexts-D9Aj9BI_.js";import"./Text-DxjUFe6b.js";import"./useDateFormatter-B1MkPuwi.js";import"./useControlledState-CwdPjKis.js";import"./useLocalizedStringFormatter-fztwDLIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DM2mAhts.js";import"./useEvent-CrvnL7jH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-tLKe2g5W.js";import"./VisuallyHidden-du_qoG-V.js";import"./clsx-Ciqy0D92.js";import"./Button-CStAPZI-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DmUmyjCk.js";import"./createLucideIcon-DlFkL0lK.js";import"./chevron-left-CPIJysLe.js";import"./chevron-right-Dk_9jZv9.js";import"./Heading-B4IUzRMR.js";import"./FieldError-DgfjuVzW.js";import"./Text-Cz34VrmV.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
