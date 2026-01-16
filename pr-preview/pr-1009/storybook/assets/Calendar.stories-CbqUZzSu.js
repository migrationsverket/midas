import{$ as c,a as m,r as l,j as d}from"./iframe-BfX_07x0.js";import{C as n}from"./Calendar-jGyuxP_U.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DIM_q6hx.js";import"./Button-BjsM-sZt.js";import"./utils-otEk9Sjq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BW_Q879K.js";import"./useFocusRing-B8HbIXNd.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./RSPContexts-Cjsc-eOQ.js";import"./Text-BlHVCXfu.js";import"./useDateFormatter-Dzu5AR1E.js";import"./useControlledState-BDBdaFnj.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-adCisLSE.js";import"./useEvent-TK48cLph.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-tN0S61gz.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./clsx-Ciqy0D92.js";import"./Button-S0b0VHM6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";import"./createLucideIcon-NdhLV474.js";import"./chevron-left-BnBBDrfG.js";import"./chevron-right-Dngbe2cC.js";import"./Heading-DNwj3PZt.js";import"./FieldError-CRBWYL-W.js";import"./Text-B2HNGjiH.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
