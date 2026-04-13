import{$ as c,a as m,r as l,j as d}from"./iframe-Db_qDyjb.js";import{C as n}from"./Calendar-BLw6qN6e.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BYEpekrR.js";import"./Button-DmcShG5W.js";import"./utils-B1ump1uN.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ck1I1Pl6.js";import"./useFocusRing-CvFtjn9f.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./RSPContexts-vbQVcb1z.js";import"./Text-DysxiSoS.js";import"./useDateFormatter-DgCep7FZ.js";import"./useControlledState-CW90Ui0G.js";import"./useLocalizedStringFormatter-DgJKEd-_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CLG66ZYz.js";import"./useEvent-BcyDDH_o.js";import"./getScrollParent-CSjng6XF.js";import"./scrollIntoView-mNDR3iIh.js";import"./useDescription-mlqK3r8Y.js";import"./VisuallyHidden-DI0T0a8c.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CWkGr9FW.js";import"./createLucideIcon-Dj8isrVr.js";import"./chevron-right-CaQdq51X.js";import"./Button-B6sBamwP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./Heading-BUWWv4-M.js";import"./FieldError-3n-vV-Ng.js";import"./Text-CV2l2NwE.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
