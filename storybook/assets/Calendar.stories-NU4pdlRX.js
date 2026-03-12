import{$ as c,a as m,r as l,j as d}from"./iframe-DkQ7cM23.js";import{C as n}from"./Calendar-CWpeyVyw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D7GFIbPa.js";import"./Button-Bq2iEg50.js";import"./utils-DP89l6Mv.js";import"./clsx-B-dksMZM.js";import"./Hidden-CcF5EX2e.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./RSPContexts-9PmMy4Xi.js";import"./Text-mqMgoxWe.js";import"./useDateFormatter-2umM9aSz.js";import"./useControlledState-nr5IMB9l.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Y8k3yS49.js";import"./useEvent-grDVPgOX.js";import"./getScrollParent-C8j_9fYa.js";import"./scrollIntoView-DGwr96lc.js";import"./useDescription-D6gfKm05.js";import"./VisuallyHidden-DiP98uOJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BmKIlhie.js";import"./createLucideIcon-DkseUJ3l.js";import"./chevron-right-DjQf-G7R.js";import"./Button-rAjKvaV6.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./Heading-ByI2JxVS.js";import"./FieldError-BqQ6odJM.js";import"./Text-DsOkgq9m.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
