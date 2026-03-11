import{$ as c,a as m,r as l,j as d}from"./iframe-BwuZ39Vz.js";import{C as n}from"./Calendar-DvjEIRWt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CtI5iu8g.js";import"./Button-Cn77Lxgi.js";import"./utils-Dazgo93a.js";import"./clsx-B-dksMZM.js";import"./Hidden-C8O8FPO6.js";import"./useFocusRing-DWqwuqDQ.js";import"./index-BYlaNIkZ.js";import"./index-Db__52FI.js";import"./useLabels-D0VSRyAt.js";import"./useButton-C25K8Bao.js";import"./RSPContexts-BQCBl8jV.js";import"./Text-zo_PZ5oe.js";import"./useDateFormatter-CxhZsJ54.js";import"./useControlledState-CNRISZnR.js";import"./useLocalizedStringFormatter-Dlk9HRO-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B3YJl6kx.js";import"./useEvent-BNfr9VP-.js";import"./getScrollParent-BDOGEtvC.js";import"./scrollIntoView-B2yrEsZZ.js";import"./useDescription-DmBSG3eh.js";import"./VisuallyHidden-3B0Aqf7R.js";import"./clsx-Ciqy0D92.js";import"./Button-BINP1rbK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ni97qJq4.js";import"./createLucideIcon-B-TCaGAA.js";import"./chevron-left-Pz3tPOai.js";import"./chevron-right-Cj1Usctj.js";import"./Heading-DygGRZtp.js";import"./FieldError-6yyVufrl.js";import"./Text-D0CV2pqO.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
