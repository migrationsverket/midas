import{$ as c,a as m,r as l,j as d}from"./iframe-BgVJ8X44.js";import{C as n}from"./Calendar-DuRWLqqD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CX3L7i1t.js";import"./Button-Co07siwL.js";import"./utils-D-I24J34.js";import"./clsx-B-dksMZM.js";import"./Hidden-2A-J6V47.js";import"./useFocusRing-CTvPExP9.js";import"./index-mSUBts4J.js";import"./index-r-q8-w1E.js";import"./useLabels-Cc5uE-EY.js";import"./useButton-B_FWwj3N.js";import"./RSPContexts-BLdliVAA.js";import"./Text-FAJBtBOA.js";import"./useDateFormatter-CuwCRqpM.js";import"./useControlledState-CIZ5X_Vt.js";import"./useLocalizedStringFormatter-D6OWhLn8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOJnB_QP.js";import"./useEvent-BJMzsLl5.js";import"./getScrollParent-iPCQ6IZJ.js";import"./scrollIntoView-DecpEwb6.js";import"./useDescription-HPM-2TK6.js";import"./VisuallyHidden-Cge0FuXr.js";import"./clsx-Ciqy0D92.js";import"./Button-DPgPRHM0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxZR6OYe.js";import"./createLucideIcon-DpkHLMCU.js";import"./chevron-left-D4NUA0tt.js";import"./chevron-right-DSDzsNON.js";import"./Heading-CVDh0LRI.js";import"./FieldError-gCUQmcQk.js";import"./Text-Ur40Kxtz.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
