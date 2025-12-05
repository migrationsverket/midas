import{$ as p,a as m,r as l,j as d}from"./iframe-cjgaQTbV.js";import{C as n}from"./Calendar-BpjjvE_o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D7S03sAT.js";import"./Button-Bc8n5vPI.js";import"./utils-B7obR6Um.js";import"./clsx-B-dksMZM.js";import"./Hidden-BNDGTdgg.js";import"./useFocusRing-tZdXTMa6.js";import"./index-CMBZFI91.js";import"./index-BuJptDJm.js";import"./useLabels-_lpRaq5N.js";import"./useButton-CJbE9EUu.js";import"./RSPContexts-__dCJUmR.js";import"./Text-DzSej0my.js";import"./useDateFormatter-C0MWS2E9.js";import"./useControlledState-fnpb4ApR.js";import"./useLocalizedStringFormatter-Bja4yra-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cz18ujy8.js";import"./useEvent-D2p3mPWR.js";import"./getScrollParent-DQLmtl1X.js";import"./scrollIntoView-DfJRvT_I.js";import"./useDescription-DoEqjAMH.js";import"./VisuallyHidden-DFAX4X2F.js";import"./clsx-Ciqy0D92.js";import"./Button-CJqsJHUi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhHkNnmO.js";import"./createLucideIcon-B-E7-HZJ.js";import"./chevron-right-DmYIeWLc.js";import"./Heading-T_2JYl4t.js";import"./FieldError-DSvxWesv.js";import"./Text-BAi7lGpW.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
