import{$ as c,a as m,r as l,j as d}from"./iframe-DQmFqJHS.js";import{C as n}from"./Calendar-B3SUQibe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-JbNr-1_-.js";import"./Button-CvJGdaRR.js";import"./utils-BWrI25uH.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-Me28_w.js";import"./useFocusRing-DItV0gqG.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./RSPContexts-DADBvuUA.js";import"./Text-D7G5v1zt.js";import"./useDateFormatter-BYa1Dzj7.js";import"./useControlledState-C5li1zvV.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-YOHctyg7.js";import"./useEvent-CTB_6RyV.js";import"./getScrollParent-DjSabJcp.js";import"./scrollIntoView-5ZKvz8fx.js";import"./useDescription-h9Po8Y0i.js";import"./VisuallyHidden-CzKNKfXb.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B6fOAuLW.js";import"./createLucideIcon-BG_KaWyL.js";import"./chevron-right-DJgJ7vBw.js";import"./Button-Cc39pfDx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Heading-GxnpDQb1.js";import"./FieldError-CaxPGIch.js";import"./Text-Dv2vHw0w.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
