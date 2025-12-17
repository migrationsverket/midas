import{$ as p,a as m,r as l,j as d}from"./iframe-Dm1httYB.js";import{C as n}from"./Calendar-CgMrDQFn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-sB7xOh3k.js";import"./Button-D4Ys_IRP.js";import"./utils-DAcLM52Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUN5HDam.js";import"./useFocusRing-C0iZIFPr.js";import"./index-Cq_lPOA_.js";import"./index-2aXvH78J.js";import"./useLabels-Dn030z5M.js";import"./useButton-DaUM1Uk2.js";import"./RSPContexts-0sXFgJk0.js";import"./Text-C4WcM4sb.js";import"./useDateFormatter-fTZhPoY1.js";import"./useControlledState-XoQnkC5P.js";import"./useLocalizedStringFormatter-B-lsgELR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D8mG466V.js";import"./useEvent-Bta9D14b.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BmoRSyqj.js";import"./VisuallyHidden-CHSyJVG_.js";import"./clsx-Ciqy0D92.js";import"./Button-DcFMStX5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BA3OZleP.js";import"./createLucideIcon-Cua-ZzbR.js";import"./chevron-right-Bg9YjLiv.js";import"./Heading-CX0JwD51.js";import"./FieldError-DPFfxwf1.js";import"./Text-BeOvwamM.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
