import{$ as p,a as m,r as l,j as d}from"./iframe-DAe8TR3I.js";import{C as n}from"./Calendar-BcO67AkC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-tJRqUbpm.js";import"./Button-Bap4iZb1.js";import"./utils-BjJkJaoq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CuVt48UU.js";import"./useFocusRing-COEuw-4k.js";import"./index-DERiSa9g.js";import"./index-CZrxflW1.js";import"./useLabels-BQ0JFana.js";import"./useButton-Ds14CM6t.js";import"./RSPContexts-BT4NOdPg.js";import"./Text-C4Ukkj8G.js";import"./useDateFormatter-DE-XORHj.js";import"./useControlledState-C7zn0ZYV.js";import"./useLocalizedStringFormatter-B3jEwN9p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DrHl97Si.js";import"./useEvent-BoiLyQt3.js";import"./getScrollParent-DlZ57Qi8.js";import"./scrollIntoView-4cLwSIyR.js";import"./useDescription-B02KBJwN.js";import"./VisuallyHidden-Cxmbdpe5.js";import"./clsx-Ciqy0D92.js";import"./Button-WqYefckK.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DpMm3nXz.js";import"./createLucideIcon-BbUVc_oI.js";import"./chevron-right-BtwDQhxJ.js";import"./Heading-Driein0P.js";import"./FieldError-FomvQXyZ.js";import"./Text-lURboruh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
