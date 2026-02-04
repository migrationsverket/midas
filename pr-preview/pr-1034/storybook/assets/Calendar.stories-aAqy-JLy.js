import{$ as c,a as m,r as l,j as d}from"./iframe-C_RGnjGF.js";import{C as n}from"./Calendar-D2GHM-_d.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BS0n2lpU.js";import"./Button-DuBv3q_5.js";import"./utils-CizOIJwG.js";import"./clsx-B-dksMZM.js";import"./Hidden-BRwSW5Hr.js";import"./useFocusRing-BF7aoqv-.js";import"./index-tt1S6LDy.js";import"./index-CO49tAAQ.js";import"./useLabels-BfoE21n1.js";import"./useButton-CLPY3zOp.js";import"./RSPContexts-DrxxWwfc.js";import"./Text-CHUsilgm.js";import"./useDateFormatter-mwQYWstB.js";import"./useControlledState-DtWpqbpS.js";import"./useLocalizedStringFormatter-Bnrb7dzs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxuzfQdl.js";import"./useEvent-Dx80kgdU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BxKH-cOf.js";import"./VisuallyHidden-DR_ZosVl.js";import"./clsx-Ciqy0D92.js";import"./Button-zzC5AJk8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEWE3auq.js";import"./createLucideIcon-Dw11k2K7.js";import"./chevron-left-CVycxWO-.js";import"./chevron-right-DuD_AAyB.js";import"./Heading-pb6Nclft.js";import"./FieldError-ChB1xIDl.js";import"./Text-BVmb7BBG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
