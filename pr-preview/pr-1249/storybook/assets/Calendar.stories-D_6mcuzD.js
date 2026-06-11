import{$ as c,a as m,r as l,j as d}from"./iframe-Di5CTR8T.js";import{C as n}from"./Calendar-DnA0ta9t.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CbnjAL6K.js";import"./Button-2OtSDF-S.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./Hidden-sHhuPHwe.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./RSPContexts-DB30PmIp.js";import"./Text-ZJfVqn-h.js";import"./useDateFormatter-D2mJC8cg.js";import"./useControlledState-I_KBwW67.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BkLBp1-R.js";import"./useEvent-Crt2nr6j.js";import"./getScrollParent-2xlS7fKj.js";import"./scrollIntoView-NTyBe7BV.js";import"./useDescription-XOfwguuv.js";import"./VisuallyHidden-DD_4lyF0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-wdkZyFU-.js";import"./createLucideIcon-BtcOznK7.js";import"./chevron-right-B4nZUggR.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Heading-BZrlUYHo.js";import"./FieldError-Bv2rXWOC.js";import"./Text-n28vbpm4.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
