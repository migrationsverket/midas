import{$ as c,a as m,r as l,j as d}from"./iframe-DzQsNUlN.js";import{C as n}from"./Calendar-CQEvRvp7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CTmcsxtg.js";import"./Button-B-ooyoCL.js";import"./utils-BK4Wbdgl.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJckUxlD.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./RSPContexts-Bo3qcagQ.js";import"./Text-B9j4IbHz.js";import"./useDateFormatter-BsrkWLeP.js";import"./useControlledState-BDeuRVdh.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CscfdfxB.js";import"./useEvent-DPJfrH0C.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CghOEtAM.js";import"./VisuallyHidden-ukn47BBG.js";import"./clsx-Ciqy0D92.js";import"./Button-D9Fs-ZCK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./createLucideIcon-BcyF_Y89.js";import"./chevron-left-DFSMUhFu.js";import"./chevron-right-Ct7_136i.js";import"./Heading-DRrzocmn.js";import"./FieldError-DdUwEQrU.js";import"./Text-DQ3iFp2f.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
