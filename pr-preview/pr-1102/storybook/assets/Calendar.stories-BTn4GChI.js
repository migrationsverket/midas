import{$ as c,a as m,r as l,j as d}from"./iframe-BKt9EFfY.js";import{C as n}from"./Calendar-Dub9us5m.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-u8-4Np4h.js";import"./Button-54WAdtvn.js";import"./utils-UHPC9nWZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIzqGf_Y.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./RSPContexts-C1Y2t1uV.js";import"./Text-Cx5eezfb.js";import"./useDateFormatter-DkWDdNSD.js";import"./useControlledState-BZs3lQsK.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPAZNxGP.js";import"./useEvent-BsotznEQ.js";import"./getScrollParent-JoXPjCTV.js";import"./scrollIntoView-D7dRqv7d.js";import"./useDescription-ClLBcdJg.js";import"./VisuallyHidden-oXJqa0w4.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DIZJkpNa.js";import"./createLucideIcon-CwzpYKvj.js";import"./chevron-right-CtxtKGAU.js";import"./Button-BP3_jhUy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./Heading-C48sIEiR.js";import"./FieldError-x-AT8pl1.js";import"./Text-QG4NB2hl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
