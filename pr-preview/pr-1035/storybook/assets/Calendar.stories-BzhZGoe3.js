import{$ as c,a as m,r as l,j as d}from"./iframe-BXL4RoxG.js";import{C as n}from"./Calendar-HXZR1tfn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DV-uJFK9.js";import"./Button-D88wRmT9.js";import"./utils-Bf3izy9L.js";import"./clsx-B-dksMZM.js";import"./Hidden-Budc0me5.js";import"./useFocusRing-CFKLadQc.js";import"./index-ChlQ7hUJ.js";import"./index-CVQMxt-B.js";import"./useLabels-ZcBmnljP.js";import"./useButton-Q5MxpZ0c.js";import"./RSPContexts-D1_gZHxa.js";import"./Text-D5IutxNH.js";import"./useDateFormatter-C0fVIzGh.js";import"./useControlledState-ChSuwDfw.js";import"./useLocalizedStringFormatter-DY1IbHJs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cl0VjzQk.js";import"./useEvent-C9ZgQidS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B2r5uC_Z.js";import"./VisuallyHidden-BNHdTIn0.js";import"./clsx-Ciqy0D92.js";import"./Button-BPaLzN_1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLNeHttS.js";import"./createLucideIcon-Bt1FuSTk.js";import"./chevron-left-DQUKMT6b.js";import"./chevron-right-BLsysfgr.js";import"./Heading-lSwE_jTY.js";import"./FieldError-7f6dpKUo.js";import"./Text-CdHl8okE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
