import{$ as c,a as m,r as l,j as d}from"./iframe-CgGNk3rw.js";import{C as n}from"./Calendar-DGYYJ_Qd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BYDXhx6z.js";import"./Button-BQUsf6YZ.js";import"./utils-Bsla82oN.js";import"./clsx-B-dksMZM.js";import"./Hidden-YphN5jOW.js";import"./useFocusRing-PEhcRx0f.js";import"./index-DCKR56k8.js";import"./index-BSP806VS.js";import"./useLabels-CVmJxcvd.js";import"./useButton-Bxc6d1yq.js";import"./RSPContexts-Dw10a7j-.js";import"./Text-CFQfYKY3.js";import"./useDateFormatter-hVuepFpH.js";import"./useControlledState-CsvnnSan.js";import"./useLocalizedStringFormatter-DHE3JpRj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B_OCj7cc.js";import"./useEvent-B-jnvtdK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BqkAvqbm.js";import"./VisuallyHidden-Dxo16egF.js";import"./clsx-Ciqy0D92.js";import"./Button-fl31v-Li.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C6Xrjd2_.js";import"./createLucideIcon-DHWtI_nR.js";import"./chevron-left-MN-yPWxw.js";import"./chevron-right-XLXc7IzU.js";import"./Heading-BwJP6vZg.js";import"./FieldError-BGEe_2Lk.js";import"./Text-pXEnGwlG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
