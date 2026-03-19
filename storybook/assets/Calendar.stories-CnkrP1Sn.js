import{$ as c,a as m,r as l,j as d}from"./iframe-BPfLM7Ck.js";import{C as n}from"./Calendar-BHT8a8oL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BINZNLKl.js";import"./Button-BCZt_uJ2.js";import"./utils-CSi4b_Yv.js";import"./clsx-B-dksMZM.js";import"./Hidden-_AH0dQ5R.js";import"./useFocusRing-CsxpvGDo.js";import"./index-rhZ-B0wi.js";import"./index-CiQawPHP.js";import"./useLabels-BKPQIAbg.js";import"./useButton-B_Q5X_Fs.js";import"./RSPContexts-D9Yw33px.js";import"./Text-EDTELklb.js";import"./useDateFormatter-B7Ft55sf.js";import"./useControlledState-Bu5kp2Ub.js";import"./useLocalizedStringFormatter-L6JiFowf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CO3HBnkP.js";import"./useEvent-DxJgb46r.js";import"./getScrollParent-Ci5vFefB.js";import"./scrollIntoView-AZss3pZ2.js";import"./useDescription-BfSwuuI8.js";import"./VisuallyHidden-BbgyoPj6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CRR1wSnT.js";import"./createLucideIcon-DawqXxM8.js";import"./chevron-right-T-bszASN.js";import"./Button-DJ8_vDZW.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DYlaFC6-.js";import"./Heading-pLnr3ITY.js";import"./FieldError-DA7YJhow.js";import"./Text-BuCe-OoK.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
