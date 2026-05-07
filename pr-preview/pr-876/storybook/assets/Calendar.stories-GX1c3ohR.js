import{$ as c,a as m,r as l,j as d}from"./iframe-aJfE6oy0.js";import{C as n}from"./Calendar-C8aD6e2n.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DIeCOSA3.js";import"./Button-gsjvyy6J.js";import"./utils-COacjnfx.js";import"./clsx-B-dksMZM.js";import"./Hidden-ijM5UvIg.js";import"./useFocusRing-ClTA_ULX.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./RSPContexts-9F0yhmI5.js";import"./Text-CBxYHQaa.js";import"./useDateFormatter-6tVlNe5a.js";import"./useControlledState-y9DEv0LS.js";import"./useLocalizedStringFormatter--tqgw_C7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_LKVmj0.js";import"./useEvent-BKCPZ-HL.js";import"./getScrollParent-C89CZMJK.js";import"./scrollIntoView-CNAiIIsG.js";import"./useDescription-DS9x0_tx.js";import"./VisuallyHidden-D5b4EtUm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BZhC-9yD.js";import"./createLucideIcon-CHcVE9D4.js";import"./chevron-right-B-ENV9H8.js";import"./Button-DTBmOwE-.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./Heading-SNP1UP3U.js";import"./FieldError-BZPifAC7.js";import"./Text-CjkYZ3Fr.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
