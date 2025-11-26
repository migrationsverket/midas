import{$ as p,a as m,r as l,j as d}from"./iframe-DJhNi_-f.js";import{C as n}from"./Calendar-wdIi_UkN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-q_uM7AzH.js";import"./Button-Ca0cwykn.js";import"./utils-Do643h1j.js";import"./clsx-B-dksMZM.js";import"./Hidden-qjutHgwq.js";import"./useFocusRing-CIQbBMgf.js";import"./index-DW_CeOSp.js";import"./index-BnbnG8Mx.js";import"./useLabels-BKEV4xVA.js";import"./useButton-Cy4auwEY.js";import"./RSPContexts-BRjDF350.js";import"./Text-B4M7ccT6.js";import"./useDateFormatter-01Cdqh8f.js";import"./useControlledState-C8VisnXZ.js";import"./useLocalizedStringFormatter-DUAmzbz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BmWxNFiE.js";import"./useEvent-CIe0shvn.js";import"./getScrollParent-JJILP5BF.js";import"./scrollIntoView-DaAL2pSO.js";import"./useDescription-Ac_ksCkA.js";import"./VisuallyHidden-DymIWSTG.js";import"./clsx-Ciqy0D92.js";import"./Button-BJ539bZj.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bk0a2hhK.js";import"./createLucideIcon--d2H5b3A.js";import"./chevron-right-DoThsx5y.js";import"./Heading-UuKjrE2g.js";import"./FieldError-QYZw2O7I.js";import"./Text-CU6r8O-i.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
