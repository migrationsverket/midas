import{$ as c,a as m,r as l,j as d}from"./iframe-BtNJMoHI.js";import{C as n}from"./Calendar-DgQCRh5p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-JuYKgXT1.js";import"./Button-DhLs1vMJ.js";import"./utils-BTcjIN4e.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ceg14RrY.js";import"./useFocusRing-B5Ii0CSA.js";import"./index-mJuBdKXF.js";import"./index-DwYe5WTW.js";import"./useLabels-CxeRtDFx.js";import"./useButton-Ddodp3Ah.js";import"./RSPContexts-BF7VHJM2.js";import"./Text-BGME6aJP.js";import"./useDateFormatter-BeCcl973.js";import"./useControlledState-CgZyRzUC.js";import"./useLocalizedStringFormatter-DhOOgyIy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5vnx2BU.js";import"./useEvent-lAZ0Ls88.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-aGP4GkA6.js";import"./VisuallyHidden-BkS4_cE1.js";import"./clsx-Ciqy0D92.js";import"./Button-BhgL-jXP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSEZ_sfA.js";import"./createLucideIcon-D27Pl-Vx.js";import"./chevron-left-Cm6Yi-dU.js";import"./chevron-right-ChssaFST.js";import"./Heading-CVpkZosN.js";import"./FieldError-Xit4Yszo.js";import"./Text-OgZoRIHX.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
