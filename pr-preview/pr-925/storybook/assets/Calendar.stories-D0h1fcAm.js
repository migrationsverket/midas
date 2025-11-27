import{$ as p,a as m,r as l,j as d}from"./iframe-BcYLPvvG.js";import{C as n}from"./Calendar--5ajUq7z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ILOLqcaF.js";import"./Button-Dk0RbBuY.js";import"./utils-DuGQH1VB.js";import"./clsx-B-dksMZM.js";import"./Hidden-tUEU5F-V.js";import"./useFocusRing-mtX7PO0G.js";import"./index-8OTKUVm4.js";import"./index-DIjlvTAp.js";import"./useLabels-h9x39qhJ.js";import"./useButton-CxdPVYy7.js";import"./RSPContexts-BtVOhJLL.js";import"./Text-Ctvw4Oon.js";import"./useDateFormatter-MGZv0BQX.js";import"./useControlledState-Cl08l4Il.js";import"./useLocalizedStringFormatter-CEq-wPRG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DlT6-WM5.js";import"./useEvent-HfrKpO3k.js";import"./getScrollParent-DblQOhU2.js";import"./scrollIntoView-BpuKwFUC.js";import"./useDescription-BkSntyEJ.js";import"./VisuallyHidden-B8-euVpR.js";import"./clsx-Ciqy0D92.js";import"./Button-C21XDfHm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C15hJ3-x.js";import"./createLucideIcon-h4XNnCB9.js";import"./chevron-right-DBtuMEU-.js";import"./Heading-B9CW9bk0.js";import"./FieldError-DiuvsHLT.js";import"./Text-BmaZQl73.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
