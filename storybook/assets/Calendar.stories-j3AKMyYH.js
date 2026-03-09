import{$ as c,a as m,r as l,j as d}from"./iframe-BouJzQQI.js";import{C as n}from"./Calendar-DE48nL8o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DDQHt9me.js";import"./Button-CGcz2bXe.js";import"./utils-DjMpdX5f.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bml1-NzX.js";import"./useFocusRing-DLAN_On1.js";import"./index-Mk5PyGJk.js";import"./index-CdrImusv.js";import"./useLabels-rV452Poa.js";import"./useButton-CJHkKL18.js";import"./RSPContexts-AGIfMDJp.js";import"./Text-BC2cfNMW.js";import"./useDateFormatter-CBP4WWCW.js";import"./useControlledState-DpPiTef7.js";import"./useLocalizedStringFormatter-DMqmuQ22.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bztm0A4_.js";import"./useEvent-DCCwBm7e.js";import"./getScrollParent-DhXY10Gw.js";import"./scrollIntoView-BXxHZrWR.js";import"./useDescription-Mcf3LJqp.js";import"./VisuallyHidden-DJQNz0Bi.js";import"./clsx-Ciqy0D92.js";import"./Button-McxTSLwF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5s11YDl.js";import"./createLucideIcon-C49CaP5m.js";import"./chevron-left-B-ZhkfV_.js";import"./chevron-right-C5XO2dr2.js";import"./Heading-DyaNOn6V.js";import"./FieldError-BSX4JMis.js";import"./Text-B0v4i5dp.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
