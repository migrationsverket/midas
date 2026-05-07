import{$ as c,a as m,r as l,j as d}from"./iframe-BNcGdhPn.js";import{C as n}from"./Calendar-DGXCHDqz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bvq4SJGg.js";import"./Button-CSPLOvS6.js";import"./utils-BPT-EsfX.js";import"./clsx-B-dksMZM.js";import"./Hidden-D26ysej5.js";import"./useFocusRing-Cu9nwss3.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./RSPContexts-DHoclz_N.js";import"./Text-Dc9-vgHL.js";import"./useDateFormatter-6bag9qXw.js";import"./useControlledState-BMDHyIEM.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-N3ZpADMd.js";import"./useEvent-CU5jG29K.js";import"./getScrollParent-Dxp0T4Mw.js";import"./scrollIntoView-DW5hP9Ho.js";import"./useDescription-B3I2KEu4.js";import"./VisuallyHidden-BrOw3xQL.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DEZZgRmk.js";import"./createLucideIcon-CIzIYBm5.js";import"./chevron-right-DkntElfi.js";import"./Button-BgPh4XDv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Heading-ChJbJ3Ze.js";import"./FieldError-CFxnUxOD.js";import"./Text-CjSndq1s.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
