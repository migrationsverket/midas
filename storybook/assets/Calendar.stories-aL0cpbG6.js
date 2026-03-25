import{$ as c,a as m,r as l,j as d}from"./iframe-CJiLO33n.js";import{C as n}from"./Calendar-CVTPcE2-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CqQ1ol3r.js";import"./Button-BPl7GMUn.js";import"./utils-BwIbfVvT.js";import"./clsx-B-dksMZM.js";import"./Hidden-GX2Gt-Bh.js";import"./useFocusRing-BwtfOiN2.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./RSPContexts-T3bE05r6.js";import"./Text-Cu_x9kkp.js";import"./useDateFormatter-YJ-ymNw_.js";import"./useControlledState-sn3ZKmd0.js";import"./useLocalizedStringFormatter-BwFxFA-j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BvYo94Rd.js";import"./useEvent-B4Mg-F-r.js";import"./getScrollParent-CrmutzXr.js";import"./scrollIntoView-CqRJ3xkb.js";import"./useDescription-t2KTHtwf.js";import"./VisuallyHidden-DMMbRnDT.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D7ohoq1F.js";import"./createLucideIcon-DApbN3tp.js";import"./chevron-right-BnBHhMpZ.js";import"./Button-u-2V4ARC.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./Heading-Bl8ISOL7.js";import"./FieldError-Dd2S8Fqt.js";import"./Text-B20Rga9k.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
