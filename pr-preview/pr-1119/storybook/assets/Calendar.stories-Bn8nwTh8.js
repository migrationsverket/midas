import{$ as c,a as m,r as l,j as d}from"./iframe-BEfu4cuV.js";import{C as n}from"./Calendar-D1iNEt2N.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D-PgiiH1.js";import"./Button-DwT05Yas.js";import"./utils-BeR4bg4o.js";import"./clsx-B-dksMZM.js";import"./Hidden-DbtYdw9n.js";import"./useFocusRing-C6rqVt89.js";import"./index-BZsmp3Wz.js";import"./index-XFYlP6zW.js";import"./useLabels-Cc8XnrID.js";import"./useButton-DfYe28nP.js";import"./RSPContexts-BAhkEONY.js";import"./Text-BC7EJkoa.js";import"./useDateFormatter-CL3JTpAr.js";import"./useControlledState-DrRQ3ZH3.js";import"./useLocalizedStringFormatter-Bskkm3TD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHM_j3Nb.js";import"./useEvent--stzEwau.js";import"./getScrollParent-EJnTNbj6.js";import"./scrollIntoView-B2G8ZQve.js";import"./useDescription-Bd5nXxJ0.js";import"./VisuallyHidden-CLBjEdEZ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B62rf8QJ.js";import"./createLucideIcon-BxYC1ZwZ.js";import"./chevron-right-z0upyF8O.js";import"./Button-CNvrI9qG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DJkiKMK1.js";import"./Heading-DSlhrNwf.js";import"./FieldError-RSI06Lef.js";import"./Text-Cvg6C9XG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
