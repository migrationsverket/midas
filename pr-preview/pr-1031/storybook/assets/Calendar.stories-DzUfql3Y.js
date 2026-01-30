import{$ as c,a as m,r as l,j as d}from"./iframe-CzkIVWu3.js";import{C as n}from"./Calendar-DZcnqTGG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BETtxusj.js";import"./Button-DhtFINKQ.js";import"./utils-DZrNC9W-.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7FrmOoe.js";import"./useFocusRing-m88TTZQ1.js";import"./index-B4Y469Zs.js";import"./index-CS5avNyc.js";import"./useLabels-Dsf3Sz-Y.js";import"./useButton-Bky5JxvW.js";import"./RSPContexts-BCM-zQK8.js";import"./Text-SOVw6BD9.js";import"./useDateFormatter-N9fTCaST.js";import"./useControlledState-Cna3kncS.js";import"./useLocalizedStringFormatter-Bj-fK2b0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CfWPrZul.js";import"./useEvent-BUHVKPgO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-WzmBOmwR.js";import"./VisuallyHidden-C9fSBHBW.js";import"./clsx-Ciqy0D92.js";import"./Button-DaFIfdKd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YJ9MX6im.js";import"./createLucideIcon-DxsLAk9T.js";import"./chevron-left-XcHodLaJ.js";import"./chevron-right-CcocFVwd.js";import"./Heading-5uV_oDOE.js";import"./FieldError-BfaONkuD.js";import"./Text-DYfagpWy.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
