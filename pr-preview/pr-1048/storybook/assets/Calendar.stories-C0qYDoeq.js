import{$ as c,a as m,r as l,j as d}from"./iframe-f5MFKuki.js";import{C as n}from"./Calendar-pPlgwyBs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BhIvmx-C.js";import"./Button-DuvywlRj.js";import"./utils-CkYTzifC.js";import"./clsx-B-dksMZM.js";import"./Hidden-DBQGh8ME.js";import"./number-DfkVkf0F.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./RSPContexts-Ckd37Azt.js";import"./Text-DdMXnW5-.js";import"./useDateFormatter-_be_M2uk.js";import"./useControlledState-DpRXGdPw.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DJ8xcir6.js";import"./useEvent-CCpoTy8x.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-fgVPMTaH.js";import"./VisuallyHidden-TWnsdG0a.js";import"./clsx-Ciqy0D92.js";import"./Button-BxqYbrPc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./createLucideIcon-BR5g7LJ9.js";import"./chevron-left-CpbO6VKw.js";import"./chevron-right-B5MgEEPP.js";import"./Heading-BmQhhJQW.js";import"./FieldError-C3VFwJG_.js";import"./Text-BnjALTAb.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
