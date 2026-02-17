import{$ as c,a as m,r as l,j as d}from"./iframe-CtFwdAsv.js";import{C as n}from"./Calendar-DrPeXQNm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C4cFdlCb.js";import"./Button-Dsas9bQI.js";import"./utils-v3QsXCFb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DVSOiNkA.js";import"./number-DfkVkf0F.js";import"./useFocusRing-4dXyLk97.js";import"./index-CC8QKcxH.js";import"./index-B04nzdf1.js";import"./useLabels-Ot2JOOvi.js";import"./useButton-pKf2Kj0y.js";import"./RSPContexts-0m4AhG_r.js";import"./Text-DLLk5-WP.js";import"./useDateFormatter-_IVdtzbM.js";import"./useControlledState-CWjJjGF9.js";import"./useLocalizedStringFormatter-BBunPQfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-wIHcDazw.js";import"./useEvent-cGdcjq2p.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-ByveFpkP.js";import"./VisuallyHidden-rVLj1Hba.js";import"./clsx-Ciqy0D92.js";import"./Button-zyqmdcUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNQKoGb.js";import"./createLucideIcon-DtbaAKiS.js";import"./chevron-left-BknIUy2e.js";import"./chevron-right-2qZ46bxk.js";import"./Heading-D42QPCss.js";import"./FieldError-rC39neWl.js";import"./Text-CbKa99gG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
