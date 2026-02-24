import{$ as c,a as m,r as l,j as d}from"./iframe-B46k8Jp-.js";import{C as n}from"./Calendar-lxgXlq3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CZiAmzcc.js";import"./Button-DeinXWVf.js";import"./utils-D8o13i-0.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFqGg0VD.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DkIdhDSx.js";import"./index-BNL-dXtG.js";import"./index-D8Bk77PH.js";import"./useLabels-DW9kmzSX.js";import"./useButton-B5s3hE2o.js";import"./RSPContexts-BmEJNEMw.js";import"./Text-BkyBG04s.js";import"./useDateFormatter-BROf8Nmn.js";import"./useControlledState-BtITM9-4.js";import"./useLocalizedStringFormatter-DswGCIZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOpkoIqE.js";import"./useEvent-BacgC5LG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BoBzwRVp.js";import"./VisuallyHidden-Bnc_oVlh.js";import"./clsx-Ciqy0D92.js";import"./Button-CPDizGhA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_eLZdxP.js";import"./createLucideIcon-FljtlaXo.js";import"./chevron-left-TX6B0tjk.js";import"./chevron-right-BZodqQ5B.js";import"./Heading-D_Yq3rRt.js";import"./FieldError-VsuqZb_G.js";import"./Text-BjNkUFcW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
