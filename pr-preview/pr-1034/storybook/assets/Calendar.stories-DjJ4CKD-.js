import{$ as c,a as m,r as l,j as d}from"./iframe-DchRICws.js";import{C as n}from"./Calendar-Crjg5cCq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B64XM_Tu.js";import"./Button-BZuMzazd.js";import"./utils-p-d8MzGY.js";import"./clsx-B-dksMZM.js";import"./Hidden-0A_8gJrB.js";import"./useFocusRing-D1Td16IF.js";import"./index-CaTrEPTS.js";import"./index-HHGf-Rtd.js";import"./useLabels-CyoqPhmQ.js";import"./useButton-C2I_u9zB.js";import"./RSPContexts-D7mJCwQj.js";import"./Text-Dku__uq1.js";import"./useDateFormatter-B6dAoJzr.js";import"./useControlledState-gODkUqSO.js";import"./useLocalizedStringFormatter-0XFtpg5d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BfbYlnw-.js";import"./useEvent-CMXGpGQb.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C4pVQLvJ.js";import"./VisuallyHidden-CsUUod50.js";import"./clsx-Ciqy0D92.js";import"./Button-DN9SoO3n.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN3ZQ9-k.js";import"./createLucideIcon-BN7buoN8.js";import"./chevron-left-CpgXou3y.js";import"./chevron-right-BlzgIAQt.js";import"./Heading-Cf2LkfSs.js";import"./FieldError-BEscErj6.js";import"./Text-B_W1e8Lm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
