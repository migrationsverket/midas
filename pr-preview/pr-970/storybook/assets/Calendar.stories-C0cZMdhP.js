import{$ as p,a as m,r as l,j as d}from"./iframe-C5qknig8.js";import{C as n}from"./Calendar-DAcKTM_g.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cf_VTlmA.js";import"./Button-D58d_jbz.js";import"./utils-DKdcqyb7.js";import"./clsx-B-dksMZM.js";import"./Hidden-eDXD45wQ.js";import"./useFocusRing-CXDO28rF.js";import"./index-DQIQ0FrH.js";import"./index-DiIH_Ibi.js";import"./useLabels-COhO-YfG.js";import"./useButton-BSV9csQJ.js";import"./RSPContexts-C0FXYt0s.js";import"./Text-BittgrxB.js";import"./useDateFormatter-BqIdOLn6.js";import"./useControlledState-DinrOT-z.js";import"./useLocalizedStringFormatter-CDMy5frs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PLZd-G-I.js";import"./useEvent-BGLQsjMc.js";import"./getScrollParent-KoXv4JrH.js";import"./scrollIntoView-BtORbJyS.js";import"./useDescription-jFsYt6-l.js";import"./VisuallyHidden-Cdnh5iDE.js";import"./clsx-Ciqy0D92.js";import"./Button-DU43-mcq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxThFscc.js";import"./createLucideIcon-Cxw0HGiz.js";import"./chevron-right-Duqupt6_.js";import"./Heading-BhYc6m-u.js";import"./FieldError-BDCaPSBM.js";import"./Text-BKPtXaGU.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
