import{$ as c,a as m,r as l,j as d}from"./iframe-Dtb7hqk6.js";import{C as n}from"./Calendar-D9SNEUY9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3gvlY4b7.js";import"./Button-BTwY4tVw.js";import"./utils-DwGYJ0wo.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQwBNi6i.js";import"./useFocusRing-RCYgGSJe.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./RSPContexts-BRMTqOVY.js";import"./Text-Dub-joLT.js";import"./useDateFormatter-C7L2FFHP.js";import"./useControlledState-B0XIHWrT.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGI-u_7Q.js";import"./useEvent-CrQdtEE9.js";import"./getScrollParent-DsHrkiO1.js";import"./scrollIntoView-1v2Kx20c.js";import"./useDescription-BRXkpFwc.js";import"./VisuallyHidden-BB5g-TMV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DysvtUR6.js";import"./createLucideIcon-CMh4hIEg.js";import"./chevron-right-CiHUw4cE.js";import"./Button-CgYfRdd2.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Heading-pmehtflV.js";import"./FieldError-CymQbIva.js";import"./Text-wLzVGxAi.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
