import{$ as c,a as m,r as l,j as d}from"./iframe-DZcdf5IT.js";import{C as n}from"./Calendar-tq_GwcCk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DmPxyDo1.js";import"./Button-CLvrgtgS.js";import"./utils-CiNm3Qeg.js";import"./clsx-B-dksMZM.js";import"./Hidden-iA_GYfuG.js";import"./useFocusRing-D7vWP6Oc.js";import"./index-D2C9G4F0.js";import"./index-CZ7e-jOg.js";import"./useLabels-CS1CNfia.js";import"./useButton-CzqG6NzO.js";import"./RSPContexts-t528C0-R.js";import"./Text-Cr9EbC1Z.js";import"./useDateFormatter-DkinQFjG.js";import"./useControlledState-vKZEA0Q3.js";import"./useLocalizedStringFormatter-BvvnikhE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DccEmRFv.js";import"./useEvent-DLq_Qgr9.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cin-5YQg.js";import"./VisuallyHidden-BXj8zTTi.js";import"./clsx-Ciqy0D92.js";import"./Button-BczSxBEC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BcqTdo_g.js";import"./createLucideIcon-DZnqfe9t.js";import"./chevron-left-CfNkRKTb.js";import"./chevron-right-Du9NYjs8.js";import"./Heading-CF5i_zDs.js";import"./FieldError-DM82MGqL.js";import"./Text-C3ytoZ0p.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
