import{$ as c,a as m,r as l,j as d}from"./iframe-CD9uBJjF.js";import{C as n}from"./Calendar-WCI1db6j.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-E49X2Rx6.js";import"./Button-DKA4ukB1.js";import"./utils-D9nWysEF.js";import"./clsx-B-dksMZM.js";import"./Hidden-MQKal_Xr.js";import"./useFocusRing-Bz4Ez0NQ.js";import"./index-CyAc0wfu.js";import"./index-Cfa7UGYo.js";import"./useLabels-REhQlgaO.js";import"./useButton-C2BwIN52.js";import"./RSPContexts-gGDWzVAk.js";import"./Text-gTqq02dR.js";import"./useDateFormatter-CY94jXf1.js";import"./useControlledState-CV5SZqjM.js";import"./useLocalizedStringFormatter-BfgeHIhn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DgglsxYi.js";import"./useEvent-DI0CpNHe.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CHLccClC.js";import"./VisuallyHidden-Csfns3eW.js";import"./clsx-Ciqy0D92.js";import"./Button-BuKqwfs3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B8TYdvpB.js";import"./createLucideIcon-ukt1IiZL.js";import"./chevron-left-DbkXyI6k.js";import"./chevron-right-CZND0val.js";import"./Heading-B6lKxOoy.js";import"./FieldError-BlUbkslV.js";import"./Text-DrZkRnZ9.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
