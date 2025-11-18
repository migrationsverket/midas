import{$ as p,a as m,r as l,j as d}from"./iframe-C4DKiwYN.js";import{C as n}from"./Calendar-cDO77LKo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-eJ4wscrO.js";import"./Button-OpXtZSl7.js";import"./utils-DvVj6zXb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DarF7sEh.js";import"./useFocusRing-BQmbmOM8.js";import"./index-D1Zq3tBT.js";import"./index-DvRPFHJM.js";import"./useLabels-D-Cj8mvW.js";import"./useButton-Bbt7Qg1l.js";import"./RSPContexts-Cha8J0tK.js";import"./Text-ChfCx7em.js";import"./useDateFormatter-DMPrMtJo.js";import"./useControlledState-Brso7pLD.js";import"./useLocalizedStringFormatter-DS8l-HPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CiRAHqu0.js";import"./useEvent-Bhfw0g_4.js";import"./getScrollParent-DibiPfLO.js";import"./scrollIntoView-TnIig3ea.js";import"./useDescription-CR4Bo9uy.js";import"./VisuallyHidden-BMy73pnR.js";import"./clsx-Ciqy0D92.js";import"./Button-DEY78OrD.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-lniO6bka.js";import"./chevron-right-CppuZqD4.js";import"./Heading-BMIX2CLE.js";import"./FieldError-BAHDkvqC.js";import"./Text-jvPpr9wI.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
