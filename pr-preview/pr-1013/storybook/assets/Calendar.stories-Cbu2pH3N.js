import{$ as c,a as m,r as l,j as d}from"./iframe-scLSUKLC.js";import{C as n}from"./Calendar-WJHMvubE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Do9yzAB4.js";import"./Button-DV8mnRES.js";import"./utils-VusYSVV3.js";import"./clsx-B-dksMZM.js";import"./Hidden-D_mDfWbG.js";import"./useFocusRing-_IjzIfKM.js";import"./index-mQxC8hvk.js";import"./index-DpJjKeec.js";import"./useLabels-CMKHi586.js";import"./useButton-Cj9v_jLE.js";import"./RSPContexts-DuBR0pyr.js";import"./Text-DTyekGW6.js";import"./useDateFormatter-vpQcS4pP.js";import"./useControlledState-BLpi_x0u.js";import"./useLocalizedStringFormatter-C0RBb53M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-d1MK7SJC.js";import"./useEvent-DedY8LRC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B0-u872d.js";import"./VisuallyHidden-BH-0CD7g.js";import"./clsx-Ciqy0D92.js";import"./Button-Da7_Ionc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B1l7IBDm.js";import"./createLucideIcon-D5mqExBa.js";import"./chevron-left-wHxmdjUP.js";import"./chevron-right-D-1ElnO2.js";import"./Heading-DJNjhrJN.js";import"./FieldError-CFquMVDb.js";import"./Text-Dt0v8fCv.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
