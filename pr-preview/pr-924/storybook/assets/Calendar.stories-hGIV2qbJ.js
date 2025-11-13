import{$ as p,a as m,r as l,j as d}from"./iframe-BkRwSuoF.js";import{C as n}from"./Calendar-Qhr9v6DB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CxO4yth8.js";import"./Button-CO79J77U.js";import"./utils-BdDw6N01.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-1m_lMC.js";import"./useFocusRing-B3CGeMvZ.js";import"./index-CCvpWvoT.js";import"./index-Dldu1ldC.js";import"./useLabels--gJ5LkCh.js";import"./useButton-CswrRlr6.js";import"./RSPContexts-B3MVorUA.js";import"./Text-jotSgVSv.js";import"./useDateFormatter-Dt7L0C0e.js";import"./useControlledState-v9DI2Sbw.js";import"./useLocalizedStringFormatter-Cwp5Qrc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DjrFPNoj.js";import"./useEvent-FTwQNHvp.js";import"./getScrollParent-DA13BLUh.js";import"./scrollIntoView-O2aOyMO3.js";import"./useDescription-EQv126BS.js";import"./VisuallyHidden-Dh5oNNi1.js";import"./clsx-Ciqy0D92.js";import"./Button-Og-jXPv3.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CDTY4y58.js";import"./chevron-right-CG9tODrV.js";import"./Heading-C09GpJqN.js";import"./FieldError-dJdm6PvZ.js";import"./Text-gdxh6ZQb.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
