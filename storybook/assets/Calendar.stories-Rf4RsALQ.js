import{$ as p,a as m,r as l,j as d}from"./iframe-CKFV4t_1.js";import{C as n}from"./Calendar-B0BrkpMU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BNHz-Ch5.js";import"./Button-DI-ffzDX.js";import"./utils-DI9iWWNt.js";import"./clsx-B-dksMZM.js";import"./Hidden-DihczV1P.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./RSPContexts-BzweYrWZ.js";import"./Text-DzSDPQzh.js";import"./useDateFormatter-CUUC5rN5.js";import"./useControlledState-BDpF19zF.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTu4Uaiu.js";import"./useEvent-CAPMhfOK.js";import"./getScrollParent-DClmF7Sb.js";import"./scrollIntoView-s5FNUvm8.js";import"./useDescription-XRc2AN6L.js";import"./VisuallyHidden-POfTLuvh.js";import"./clsx-Ciqy0D92.js";import"./Button-CX41FOI9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./createLucideIcon-sgDlsuts.js";import"./chevron-right-gmKExQF9.js";import"./Heading-B6vunHA3.js";import"./FieldError-CfIn2uhl.js";import"./Text-Dv3jZ_aV.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
