import{$ as p,a as m,r as l,j as d}from"./iframe-D_RLRaO3.js";import{C as n}from"./Calendar-ULn4WhTa.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CycRLXLq.js";import"./Button-u0QZa7Fn.js";import"./utils-BlqKQH7t.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFjx3PZR.js";import"./useFocusRing-DLvend6y.js";import"./index-BdZm9yDI.js";import"./index-CLauSptU.js";import"./useLabels-D_fUya2Q.js";import"./useButton-D0Ww05Nb.js";import"./RSPContexts-C-7yHdm5.js";import"./Text-BuBdqt_E.js";import"./useDateFormatter-xGRQQqLg.js";import"./useControlledState-BFob-p1I.js";import"./useLocalizedStringFormatter-DNatSRRY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_3Gj5gt.js";import"./useEvent-D1OomJ4P.js";import"./getScrollParent-DErfkRCT.js";import"./scrollIntoView-Dm-OSLLN.js";import"./useDescription-MuK9kXs1.js";import"./VisuallyHidden-Bv5E6YOy.js";import"./clsx-Ciqy0D92.js";import"./Button-CmlIBVdc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B7X7aezu.js";import"./createLucideIcon-tmDJTb0C.js";import"./chevron-right-9cdVXw_k.js";import"./Heading-zbAesl1A.js";import"./FieldError-CLCPHxAE.js";import"./Text-B2nU6iIt.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
