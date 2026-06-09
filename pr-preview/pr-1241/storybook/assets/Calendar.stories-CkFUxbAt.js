import{$ as c,a as m,r as l,j as d}from"./iframe-CaeJqQ8f.js";import{C as n}from"./Calendar-9IYE3VCN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B1NzhdlZ.js";import"./Button-CmYrsmdS.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAb19HuU.js";import"./useFocusRing-B-IWjK53.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./RSPContexts-C23pPjhB.js";import"./Text-kWHKD_uI.js";import"./useDateFormatter-BK_xlojq.js";import"./useControlledState-DVDrYLuR.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DtEaS4ed.js";import"./useEvent-DrhgR5ub.js";import"./getScrollParent-B7OSUguh.js";import"./scrollIntoView-Dv9TGF9T.js";import"./useDescription-BGB3EMY_.js";import"./VisuallyHidden-CDogNmlo.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-O_4G3k7v.js";import"./createLucideIcon-Bkh4JM6J.js";import"./chevron-right-DDAWshee.js";import"./Button-rTp5uTED.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CsL4vBQb.js";import"./Heading-DhoR6r2Q.js";import"./FieldError-BMeh3Mm5.js";import"./Text-23GvJn9a.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
