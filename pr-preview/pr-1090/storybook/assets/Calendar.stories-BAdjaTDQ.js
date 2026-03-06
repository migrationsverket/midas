import{$ as c,a as m,r as l,j as d}from"./iframe-BGjWmNYx.js";import{C as n}from"./Calendar-TB4gK-Z0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D8pdXBQm.js";import"./Button-XSu45boX.js";import"./utils-D7zTzvCU.js";import"./clsx-B-dksMZM.js";import"./Hidden-lp8KiHTo.js";import"./useFocusRing-Cv1kbpvb.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./RSPContexts-D1Qe90-y.js";import"./Text-tIbPkLw7.js";import"./useDateFormatter-pKA00IQn.js";import"./useControlledState-CvsrIW6T.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Buzm9FI6.js";import"./useEvent-uGEaKInB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Djzcv64r.js";import"./VisuallyHidden-ClgLzi2l.js";import"./clsx-Ciqy0D92.js";import"./Button-Dyr0yQHX.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B-DKJptC.js";import"./createLucideIcon-Df5FTM0K.js";import"./chevron-left-C1jyDazI.js";import"./chevron-right-CpadIQfp.js";import"./Heading-Bf5zVwtP.js";import"./FieldError-Wp4mauGJ.js";import"./Text-B9EMTagt.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
