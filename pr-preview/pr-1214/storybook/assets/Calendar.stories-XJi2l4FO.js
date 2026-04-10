import{$ as c,a as m,r as l,j as d}from"./iframe-O2McX3yB.js";import{C as n}from"./Calendar-CotDGqBc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BKiAA2p-.js";import"./Button-2hnImx6E.js";import"./utils-DO-wSHzc.js";import"./clsx-B-dksMZM.js";import"./Hidden-kbzwSHo-.js";import"./useFocusRing-C_4jX8C9.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./RSPContexts-D9PIXrmH.js";import"./Text-7Ipy1BR9.js";import"./useDateFormatter-C7PL7kmI.js";import"./useControlledState-CDscPa5k.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ngTbV_ju.js";import"./useEvent-D1NiEUxW.js";import"./getScrollParent-DMJ8Owx1.js";import"./scrollIntoView-CYxkmzpX.js";import"./useDescription-DyLngsul.js";import"./VisuallyHidden-CVECtPk8.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BN3LPl7d.js";import"./createLucideIcon-C4xn0wXs.js";import"./chevron-right-py4q-3uL.js";import"./Button-D2h_fsiV.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./Heading-D_UODxYf.js";import"./FieldError-CWyB2qd4.js";import"./Text-YZ7QSVuR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
